const bcrypt = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const { Lawyer, validate } = require("../models/lawyerModel.js");
const { generateToken } = require("../util.js");

const getLawyers = expressAsyncHandler(async (req, res) => {
  const lawyers = await Lawyer.find({});
  res.send(lawyers);
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
  if (lawyer) {
    if (bcrypt.compareSync(req.body.password, lawyer.password)) {
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
    }
  }
  res.status(401).send({ message: "Invalid email or password" });
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
  res.send({
    _id: lawyer._id,
    name: lawyer.name,
    surname: lawyer.surname,
    email: lawyer.email,
    phone: lawyer.phone,
    branch: lawyer.branch,
    memberAg: lawyer.memberAg,
    infoText: lawyer.infoText,
    perData: lawyer.perData,
    isAdmin: lawyer.isAdmin,
    token: generateToken(lawyer),
  });
});

module.exports = {
  signup,
  signin,
  deleteLawyer,
  updateLawyer,
  getLawyer,
  getLawyers,
};
