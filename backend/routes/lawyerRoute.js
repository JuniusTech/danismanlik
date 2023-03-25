const express = require("express");
const {
  getLawyers,
  getLawyer,
  updateLawyer,
  deleteLawyer,
  signin,
  signup,
  verifyLawyerAccount,
} = require("../controllers/lawyerController");
const { isLawyerAdmin, isLawyer } = require("../util.js");

const lawyerRouter = express.Router();

lawyerRouter.get("/", getLawyers);
lawyerRouter.get("/:id", getLawyer);
lawyerRouter.put("/:id", isLawyer, updateLawyer);
lawyerRouter.delete("/:id", isLawyer, isLawyerAdmin, deleteLawyer);
lawyerRouter.post("/signin", signin);
lawyerRouter.post("/signup", signup);
lawyerRouter.get("/:lawyerId/verify/:token", verifyLawyerAccount);

module.exports = lawyerRouter;
