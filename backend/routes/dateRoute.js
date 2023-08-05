const express = require("express");

const { isAuth } = require("../util.js");
const {
  createDate,
  canceledDate,
} = require("../controllers/dateController.js");

const dateRouter = express.Router();

dateRouter.post("/:userId/:lawyerId", isAuth, createDate);
dateRouter.put("/:id", isAuth, canceledDate);

module.exports = dateRouter;
