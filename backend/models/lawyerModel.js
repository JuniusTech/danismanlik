const mongoose = require("mongoose");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const lawyerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    picture: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    barNo: { type: Number, unique: true },
    branch: { type: String, required: true },
    description: { type: String },
    password: { type: String, required: true },
    memberAg: { type: Boolean, required: true },
    infoText: { type: Boolean, required: true },
    perData: { type: Boolean, required: true },
    verified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isTick: { type: Boolean, default: false },
    address: {
      description: { type: String },
      city: { type: String },
      town: { type: String },
      district: { type: String },
      code: { type: String },
    },
    about: { type: String, min: 20, max: 200 },
    languages: [String],
    education: [{ school: String, start: Number, finish: Number }],
    experience: [{ office: String, start: Number, finish: Number }],
    rating: { type: Number },
    numReviews: { type: Number },
    reviews: [reviewSchema],
    dates: [{ type: mongoose.Schema.Types.ObjectId, ref: "Date" }],
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

const Lawyer = mongoose.model("Lawyer", lawyerSchema);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().trim().min(3).max(10).required(),
    surname: joi.string().trim().min(3).max(10).required(),
    email: joi.string().email().trim().min(5).max(30).required(),
    phone: joi.string().trim().min(10).max(20).required(),
    barNo: joi.number().required(),
    branch: joi.string().required(),
    memberAg: joi.boolean().required(),
    infoText: joi.boolean().required(),
    perData: joi.boolean().required(),
    password: passwordComplexity(),
  });
  return schema.validate(data);
};

module.exports = { Lawyer, validate };
