const { Lawyer } = require("../models/lawyerModel");
const lawToken = require("../models/lawtoken");
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

    let lawyer = await Lawyer.findOne({ email: req.body.email });
    if (!lawyer)
      return res
        .status(409)
        .send({ message: "Lawyer with given email does not exist!" });

    let token = await lawToken.findOne({ lawyerId: lawyer._id });
    if (!token) {
      token = await new lawToken({
        lawyerId: lawyer._id,
        token: crypto.randomBytes(32).toString("hex"),
      }).save();
    }

    const url = `${process.env.BASE_URL}/api/law-password-reset/${lawyer._id}/${token.token}/`;

    const htmlTemplate = `
  <div>
  <p>Click on the link below to reset your password</p>
  <a href="${url}">Reset Password</a>
  </div>
  `;
    await sendEmail(lawyer.email, "Password Reset", htmlTemplate);

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
    const lawyer = await Lawyer.findOne({ _id: req.params.id });
    if (!lawyer) return res.status(400).send({ message: "Invalid link" });

    const token = await lawToken.findOne({
      lawyerId: lawyer._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    res.redirect(
      `${process.env.FRONTEND_BASE_URL}/reset-password-law/${token.lawyerId}/${token.token}`
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

    const lawyer = await Lawyer.findOne({ _id: req.params.id });
    if (!lawyer) return res.status(400).send({ message: "Invalid link" });

    const token = await lawToken.findOne({
      lawyerId: lawyer._id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ message: "Invalid link" });

    if (!lawyer.verified) lawyer.verified = true;

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    lawyer.password = hashPassword;
    await lawyer.save();
    await lawToken.findOneAndDelete({
      lawyerId: lawyer._id,
      token: req.params.token,
    });
    res.status(200).send({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { sendPassword, verifyPasswordLink, setNewPassword };
