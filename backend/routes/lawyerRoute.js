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
  searchLawyers,
  createBio,
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
lawyerRouter.post("/:id/add-bio", isLawyer, createBio);

module.exports = lawyerRouter;
