const mongoose = require("mongoose");
const dateSchema = new mongoose.Schema(
  {
    day: { type: String, required: true },
    hour: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    lawyerId: { type: mongoose.Schema.Types.ObjectId, ref: "Lawyer" },
    branch: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["completed", "cancelled", "planned"],
      default: "planned",
    },
  },
  {
    timestamps: true,
  }
);
const DateModel = mongoose.model("Date", dateSchema);
async function updateStatusOfDates() {
  const now = new Date();
  const dates = await DateModel.find();
  dates.forEach((date) => {
    const [dayNumber, month, year] = date.day.split(".");
    const [hourNumber, minute] = date.hour.split(":");
    const eventDate = new Date(year, month - 1, dayNumber, hourNumber, minute);

    if (eventDate < now && date.status !== "cancelled") {
      date.status = "completed";
    }

    date.save();
  });
}
setInterval(updateStatusOfDates, 60 * 1000);

module.exports = DateModel;
