const bcrypt = require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const Token = require("../models/token.js");
const { User, validate } = require("../models/userModel.js");
const { generateToken } = require("../util.js");
const sendEmail = require("../sendEmail");
const crypto = require("crypto");

const getUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

const getUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);
    const updatedUser = await user.save();
    res.send({ message: "User Updated", user: updatedUser });
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

const deleteUser = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.email === "ali@gmail.com") {
      res.status(400).send({ message: "Can Not Delete Admin User" });
      return;
    }
    await User.findByIdAndDelete(req.params.id);
    res.send({ message: "User Deleted" });
  } else {
    res.status(404).send({ message: "User Not Found" });
  }
});

const signin = expressAsyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ message: "Email can't be found" });
  }
  const isPasswordMatch = await bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (!isPasswordMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  if (!user.verified) {
    let verToken = await Token.findOne({
      userId: user._id,
    });
    if (!verToken) {
      verToken = new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      });
      await verToken.save();
    }
    const link = `http://localhost:5000/api/users/${user._id}/verify/${verToken.token}`;

    const htmlTemplate = `
  <div>
  <p>Click on the link below to verify your email</p>
  <a href="${link}">Verify</a>
  </div>
  `;

    await sendEmail(user.email, "Verify Your Email", htmlTemplate);

    return res.status(400).json({
      message: "We sent to you an email,please verify your email adress",
    });
  }
  const token = generateToken(user);
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  });
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
  return;
});

const signup = expressAsyncHandler(async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
  });
  const user = await newUser.save();

  const verToken = new Token({
    userId: user._id,
    token: crypto.randomBytes(32).toString("hex"),
  });
  await verToken.save();

  const link = `http://localhost:5000/api/users/${user._id}/verify/${verToken.token}`;

  const htmlTemplate = `
  <div>
  <p>Click on the link below to verify your email</p>
  <a href="${link}">Verify</a>
  </div>
  `;

  await sendEmail(user.email, "Verify Your Email", htmlTemplate);

  res.status(201).json({
    message: "We sent to you an email,please verify your email adress",
  });
});

const verifyUserAccount = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  if (!user) {
    return res.status(400).json({ message: "invalid link" });
  }
  const verToken = await Token.findOne({
    userId: user._id,
    token: req.params.token,
  });
  if (!verToken) {
    return res.status(400).json({ message: "invalid link" });
  }

  user.verified = true;
  await user.save();
  await Token.findOneAndDelete(req.params.token);

  res.status(200).json({ message: "Your account verified" });
});

module.exports = {
  signup,
  signin,
  deleteUser,
  updateUser,
  getUser,
  getUsers,
  verifyUserAccount,
};
