const express = require("express");
const {
  getBranchs,
  getBranch,
  updateBranch,
  deleteBranch,
  createBranch,
} = require("../controllers/branchController.js");

const { isLawyer, isLawyerAdmin } = require("../util.js");

const branchRouter = express.Router();

branchRouter.get("/", getBranchs);
branchRouter.get("/:id", getBranch);
branchRouter.put("/:id", isLawyer, isLawyerAdmin, updateBranch);
branchRouter.delete("/:id", isLawyer, isLawyerAdmin, deleteBranch);
branchRouter.post("/", isLawyer, isLawyerAdmin, createBranch);

module.exports = branchRouter;
