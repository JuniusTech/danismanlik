const mongoose = require("mongoose");

const BranchSchema = mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
  },
  { timestamps: true }
);

const Branch = mongoose.model("categories", BranchSchema);
module.exports = Branch;
