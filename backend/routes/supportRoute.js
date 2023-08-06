const express = require("express");
const supportController = require("../controllers/supportController.js");
const supportRouter = express.Router();
supportRouter.post("/", supportController.createSupport);
supportRouter.get("/", supportController.getSupports);

module.exports = supportRouter;
