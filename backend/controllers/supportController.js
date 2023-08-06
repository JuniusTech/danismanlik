const expressAsyncHandler = require("express-async-handler");

const { Support, validate } = require("../models/supportModel.js");

const createSupport = expressAsyncHandler(async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
  const newSupport = new Support({
    description: req.body.description,
    email: req.body.email,
  });
  const support = await newSupport.save();
  res.send({
    _id: support._id,
    description: support.description,
    email: support.email,
  });
});

const getSupports = expressAsyncHandler(async (req, res) => {
  const supports = await Support.find({}).sort({ createdAt: -1 });
  res.send(supports);
});

module.exports = {
  createSupport,
  getSupports,
};
