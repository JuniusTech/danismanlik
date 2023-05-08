const { User } = require("../models/userModel");
const Token = require("../models/token");
const crypto = require("crypto");
const sendEmail = require("../sendEmail");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcryptjs");

// send password link

const sendPassword = async (req, res) => {
  try {
    const emailSchema = Joi.object({
      email: Joi.string().email().trim().min(5).max(40).required(),
    });
    const { error } = emailSchema.validate(req.body);

    if (error)
      return res.status(400).send({ message: error.details[0].message });

    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(409)
        .send({ message: "User with given email does not exist!" });

    let token = await Token.findOne({ userId: user._id });
    if (!token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const url = `${process.env.BASE_URL}/api/password-reset/${user._id}/${token.token}/`;

    const htmlTemplate = `
  <div>
  <p>Click on the link below to reset your password</p>
  <a href="${url}">Reset Password</a>
  </div>
  `;
    await sendEmail(user.email, "Password Reset", htmlTemplate);

    res
      .status(200)
      .send({ message: "Password reset link sent to your email account" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// verify password reset link

const verifyPasswordLink = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    res.redirect(
      `${process.env.FRONTEND_BASE_URL}/reset-password/${token.userId}/${token.token}`
    );
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

//  set new password
const setNewPassword = async (req, res) => {
  try {
    const passwordSchema = Joi.object({
      password: passwordComplexity().required(),
    });
    const { error } = passwordSchema.validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    if (!user.verified) user.verified = true;

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user.password = hashPassword;
    await user.save();
    await Token.findOneAndDelete({
      userId: user._id,
      token: req.params.token,
    });
    res.status(200).send({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { sendPassword, verifyPasswordLink, setNewPassword };
