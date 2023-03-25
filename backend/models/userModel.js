const mongoose = require("mongoose");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
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
    email: joi.string().email().trim().min(5).max(40).required(),
    password: passwordComplexity(),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
