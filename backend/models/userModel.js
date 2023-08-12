const mongoose = require("mongoose");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
    dates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Date" }],
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().trim().min(3).max(10).required(),
    surname: joi.string().trim().min(3).max(10).required(),
    email: joi.string().email().trim().min(5).max(40).required(),
    phone: joi.string().trim().min(10).max(20).required(),
    password: passwordComplexity(),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
