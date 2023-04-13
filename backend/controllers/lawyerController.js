const bcrypt = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const lawToken = require("../models/lawtoken");
const { Lawyer, validate } = require("../models/lawyerModel.js");
const { generateToken } = require("../util.js");
const sendEmail = require("../sendEmail");
const crypto = require("crypto");

const getLawyers = expressAsyncHandler(async (req, res) => {
  const lawyers = await Lawyer.find({});
  res.send(lawyers);
});

const lmt = 12;
const searchLawyers = expressAsyncHandler(async (req, res) => {
  const limit = req.query.limit || lmt;
  const page = req.query.page || 1;
  const branch = req.query.branch || "";
  const isTick = req.query.isTick || "";
  const rating = req.query.rating || "";
  const order = req.query.order || "";

  const branchFilter = branch && branch !== "all" ? { branch } : {};
  const tickFilter = isTick && isTick !== "all" ? { isTick } : {};

  const ratingFilter =
    rating && rating !== "all"
      ? {
          rating: {
            $gte: Number(rating),
          },
        }
      : {};

  const sortOrder =
    order === "featured"
      ? { featured: -1 }
      : order === "toprated"
      ? { rating: -1 }
      : order === "newest"
      ? { createdAt: -1 }
      : { _id: -1 };

  const lawyers = await Lawyer.find({
    ...branchFilter,
    ...tickFilter,
    ...ratingFilter,
  })
    .sort(sortOrder)
    .limit(limit * 1)
    .skip((page - 1) * limit);
  const countLawyers = await Lawyer.countDocuments({
    ...branchFilter,
    ...tickFilter,
    ...ratingFilter,
  });
  res.send({
    countLawyers,
    page,
    pages: Math.ceil(countLawyers / limit),
    lawyers,
  });
});

const getLawyer = expressAsyncHandler(async (req, res) => {
  const lawyer = await Lawyer.findById(req.params.id);
  if (lawyer) {
    res.send(lawyer);
  } else {
    res.status(404).send({ message: "Lawyer Not Found" });
  }
});

const updateLawyer = expressAsyncHandler(async (req, res) => {
  const lawyer = await Lawyer.findById(req.params.id);
  if (lawyer) {
    lawyer.name = req.body.name || lawyer.name;
    lawyer.surname = req.body.surname || lawyer.surname;
    lawyer.phone = req.body.phone || lawyer.phone;
    lawyer.barNo = req.body.barNo || lawyer.barNo;
    lawyer.email = req.body.email || lawyer.email;
    lawyer.branch = req.body.branch || lawyer.branch;
    lawyer.memberAg = Boolean(req.body.memberAg);
    lawyer.infoText = Boolean(req.body.infoText);
    lawyer.perData = Boolean(req.body.perData);
    lawyer.isAdmin = Boolean(req.body.isAdmin);
    lawyer.isTick = Boolean(req.body.isTick);
    const updatedLawyer = await lawyer.save();
    res.send({ message: "Lawyer Updated", lawyer: updatedLawyer });
  } else {
    res.status(404).send({ message: "Lawyer Not Found" });
  }
});

const deleteLawyer = expressAsyncHandler(async (req, res) => {
  const lawyer = await Lawyer.findById(req.params.id);

  if (lawyer) {
    await Lawyer.findByIdAndDelete(req.params.id);
    res.send({ message: "Lawyer Deleted" });
  } else {
    res.status(404).send({ message: "Lawyer Not Found" });
  }
});

const signin = expressAsyncHandler(async (req, res) => {
  const lawyer = await Lawyer.findOne({ email: req.body.email });
  if (!lawyer) {
    return res.status(400).json({ message: "Email can't be found" });
  }
  const isPasswordMatch = await bcrypt.compareSync(
    req.body.password,
    lawyer.password
  );

  if (!isPasswordMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  if (!lawyer.verified) {
    let verToken = await lawToken.findOne({
      lawyerId: lawyer._id,
    });
    if (!verToken) {
      verToken = new lawToken({
        lawyerId: lawyer._id,
        token: crypto.randomBytes(32).toString("hex"),
      });
      await verToken.save();
    }
    const link = `${process.env.BASE_URL}/api/lawyers/${lawyer._id}/verify/${verToken.token}`;

    const htmlTemplate = `
  <div>
  <p>Click on the link below to verify your email</p>
  <a href="${link}">Verify</a>
  </div>
  `;
    await sendEmail(lawyer.email, "Verify Your Email", htmlTemplate);

    return res.status(400).json({
      message: "We sent to you an email,please verify your email adress",
    });
  }

  const token = generateToken(lawyer);
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  res.send({
    _id: lawyer._id,
    name: lawyer.name,
    surname: lawyer.surname,
    email: lawyer.email,
    branch: lawyer.branch,
    phone: lawyer.phone,
    isAdmin: lawyer.isAdmin,
  });
  return;
});

const signup = expressAsyncHandler(async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
  const newLawyer = new Lawyer({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone,
    barNo: req.body.barNo,
    branch: req.body.branch,
    password: bcrypt.hashSync(req.body.password),
    memberAg: req.body.memberAg,
    infoText: req.body.infoText,
    perData: req.body.perData,
  });
  const lawyer = await newLawyer.save();

  const verToken = new lawToken({
    lawyerId: lawyer._id,
    token: crypto.randomBytes(32).toString("hex"),
  });
  await verToken.save();

  const link = `${process.env.BASE_URL}/api/lawyers/${lawyer._id}/verify/${verToken.token}`;

  const htmlTemplate = `
  <div>
  <p>Click on the link below to verify your email</p>
  <a href="${link}">Verify</a>
  </div>
  `;

  await sendEmail(lawyer.email, "Verify Your Email", htmlTemplate);

  res.status(201).json({
    message: "We sent to you an email,please verify your email adress",
  });
});
const verifyLawyerAccount = expressAsyncHandler(async (req, res) => {
  const lawyer = await Lawyer.findById(req.params.lawyerId);
  if (!lawyer) {
    return res.status(400).json({ message: "invalid link" });
  }
  const verToken = await lawToken.findOne({
    lawyerId: lawyer._id,
    token: req.params.token,
  });
  if (!verToken) {
    return res.status(400).json({ message: "invalid link" });
  }

  lawyer.verified = true;
  await lawyer.save();
  await lawToken.findOneAndDelete({
    lawyerId: lawyer._id,
    token: req.params.token,
  });

  res.status(200).json({ message: "Your account verified" });
});

const createReview = expressAsyncHandler(async (req, res) => {
  const lawyerId = req.params.id;
  const lawyer = await Lawyer.findById(lawyerId);
  if (lawyer) {
    if (lawyer.reviews.find((x) => x.name === req.user.name)) {
      return res
        .status(400)
        .send({ message: "You already submitted a review" });
    }
    const review = {
      name: req.user.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    lawyer.reviews.push(review);
    lawyer.numReviews = lawyer.reviews.length;
    lawyer.rating =
      lawyer.reviews.reduce((a, c) => c.rating + a, 0) / lawyer.reviews.length;
    const updatedProduct = await lawyer.save();
    res.status(201).send({
      message: "Review Created",
      review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
      numReviews: lawyer.numReviews,
      rating: lawyer.rating,
    });
  } else {
    res.status(404).send({ message: "Lawyer Not Found" });
  }
});

module.exports = {
  signup,
  signin,
  deleteLawyer,
  updateLawyer,
  getLawyer,
  getLawyers,
  searchLawyers,
  verifyLawyerAccount,
  createReview,
};
