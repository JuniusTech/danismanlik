const expressAsyncHandler = require("express-async-handler");
const Branch = require("../models/branchModel");

const createBranch = expressAsyncHandler(async (req, res) => {
  const newBranch = new Branch({
    title: req.body.title,
  });
  const branch = await newBranch.save();
  res.send({
    _id: branch._id,
    title: branch.title,
  });
});

const getBranchs = expressAsyncHandler(async (req, res) => {
  const branchs = await Branch.find({});
  res.send(branchs);
});

const getBranch = expressAsyncHandler(async (req, res) => {
  const branch = await Branch.findById(req.params.id);
  if (branch) {
    res.send(branch);
  } else {
    res.status(404).send({ message: "Branch Not Found" });
  }
});

const updateBranch = expressAsyncHandler(async (req, res) => {
  const branch = await Branch.findById(req.params.id);
  if (branch) {
    branch.title = req.body.title || branch.title;
    const updatedBranch = await branch.save();
    res.send({ message: "Branch Updated", user: updatedBranch });
  } else {
    res.status(404).send({ message: "Branch Not Found" });
  }
});

const deleteBranch = expressAsyncHandler(async (req, res) => {
  const branch = await Branch.findById(req.params.id);

  if (branch) {
    await Branch.findByIdAndDelete(req.params.id);
    res.send({ message: "Branch Deleted" });
  } else {
    res.status(404).send({ message: "Branch Not Found" });
  }
});

module.exports = {
  createBranch,
  deleteBranch,
  updateBranch,
  getBranch,
  getBranchs,
};
