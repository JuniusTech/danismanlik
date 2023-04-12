const express = require("express");

const { isAuth } = require("../util.js");
const { createDate } = require("../controllers/dateController.js");

const dateRouter = express.Router();

dateRouter.post("/:userId/:lawyerId", isAuth, createDate);

module.exports = dateRouter;
