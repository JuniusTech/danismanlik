const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    barNo: { type: Number, unique: true },
    branch: { type: String, required: true },
    password: { type: String, required: true },
    memberAg: { type: Boolean, required: true },
    infoText: { type: Boolean, required: true },
    perData: { type: Boolean, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    token: { type: String },
  },
  {
    timestamps: true,
  }
);

const Lawyer = mongoose.model("Lawyer", lawyerSchema);
module.exports = Lawyer;
