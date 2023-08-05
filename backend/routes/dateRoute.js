const express = require("express");

const { isAuth, isAdmin } = require("../util.js");
const {
  createDate,
  canceledDate,
  getDates,
} = require("../controllers/dateController.js");

const dateRouter = express.Router();

dateRouter.post("/:userId/:lawyerId", isAuth, createDate);
dateRouter.put("/:id", isAuth, canceledDate);
dateRouter.get("/", isAuth, isAdmin, getDates);

module.exports = dateRouter;
