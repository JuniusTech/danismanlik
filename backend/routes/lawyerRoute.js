const express = require("express");
const {
  getLawyers,
  getLawyer,
  updateLawyer,
  deleteLawyer,
  signin,
  signup,
  verifyLawyerAccount,
  createReview,
  createDate,
  searchLawyers,
} = require("../controllers/lawyerController");
const { isLawyerAdmin, isLawyer, isAuth } = require("../util.js");

const lawyerRouter = express.Router();

lawyerRouter.get("/", getLawyers);
lawyerRouter.get("/search", searchLawyers);
lawyerRouter.get("/:id", getLawyer);
lawyerRouter.put("/:id", isLawyer, updateLawyer);
lawyerRouter.delete("/:id", isLawyer, isLawyerAdmin, deleteLawyer);
lawyerRouter.post("/signin", signin);
lawyerRouter.post("/signup", signup);
lawyerRouter.get("/:lawyerId/verify/:token", verifyLawyerAccount);
lawyerRouter.post("/:id/reviews", isAuth, createReview);
lawyerRouter.post("/:id/dates", isAuth, createDate);

module.exports = lawyerRouter;
