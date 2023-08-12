const expressAsyncHandler = require("express-async-handler");
const Date = require("../models/dateModel");
const { Lawyer } = require("../models/lawyerModel");
const { User } = require("../models/userModel");

const createDate = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId);
  const lawyer = await Lawyer.findById(req.params.lawyerId);
  const newDate = new Date({
    day: req.body.day,
    hour: req.body.hour,
    username: user.name,
    useremail: user.email,
    lawyername: lawyer.name,
    lawyeremail: lawyer.email,
    branch: lawyer.branch,
    description: req.body.description,
  });
  const date = await newDate.save();
  await User.findByIdAndUpdate(req.params.userId, {
    $push: {
      dates: date._id,
    },
  });
  await Lawyer.findByIdAndUpdate(req.params.lawyerId, {
    $push: {
      dates: date._id,
    },
  });

  res.send({
    _id: date._id,
    day: date.day,
    hour: date.hour,
    username: date.username,
    useremail: date.useremail,
    lawyername: date.lawyername,
    lawyeremail: date.lawyeremail,
    branch: date.branch,
    description: date.description,
    status: date.status,
  });
});

const cancelledDate = expressAsyncHandler(async (req, res) => {
  const date = await Date.findById(req.params.id);
  if (date) {
    if (date.status === "planned") {
      date.status = "cancelled";
      const updatedDate = await date.save();
      res.send({ message: "Date cancelled", updatedDate });
    } else {
      res.status(404).send({ message: "Date can not be cancelled" });
    }
  } else {
    res.status(404).send({ message: "Date Not Found" });
  }
});

const getDates = expressAsyncHandler(async (req, res) => {
  const dates = await Date.find({}).sort({ createdAt: -1 });
  res.send(dates);
});

module.exports = {
  createDate,
  cancelledDate,
  getDates,
};
