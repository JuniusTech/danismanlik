const mongoose = require("mongoose");

const lawtokenSchema = new mongoose.Schema(
  {
    lawyerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lawyer",
      required: true,
    },
    token: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const lawToken = mongoose.model("lawtoken", lawtokenSchema);
module.exports = lawToken;
