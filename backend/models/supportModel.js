const mongoose = require("mongoose");
const joi = require("joi");
const SupportSchema = mongoose.Schema(
  {
    description: { type: String, require: true },
    email: { type: String, require: true },
  },
  { timestamps: true }
);

const Support = mongoose.model("support", SupportSchema);

const validate = (data) => {
  const schema = joi.object({
    email: joi.string().email().trim().min(5).max(40).required(),
    description: joi.string().trim().min(10).max(120).required(),
  });
  return schema.validate(data);
};

module.exports = { Support, validate };
