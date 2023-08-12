const express = require("express");

const { isAuth, isAdmin, isLawyer } = require("../util.js");
const {
  createDate,
  cancelledDate,
  getDates,
} = require("../controllers/dateController.js");

const dateRouter = express.Router();

dateRouter.post("/:userId/:lawyerId", isAuth, createDate);
dateRouter.put("/:id", isLawyer, cancelledDate);
dateRouter.get("/", isAuth, isAdmin, getDates);

module.exports = dateRouter;
