const mongoose = require("mongoose");
const dateSchema = new mongoose.Schema(
  {
    day: { type: String, required: true },
    hour: { type: String, required: true },
    username: { type: String, required: true },
    useremail: { type: String, required: true },
    lawyername: { type: String, required: true },
    lawyeremail: { type: String, required: true },
    branch: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Date = mongoose.model("Date", dateSchema);
module.exports = Date;
