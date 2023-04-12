const express = require("express");
const {
  sendPassword,
  verifyPasswordLink,
  setNewPassword,
} = require("../controllers/lawPassReset");

const lawPassResetRouter = express.Router();

lawPassResetRouter.post("/", sendPassword);
lawPassResetRouter.get("/:id/:token", verifyPasswordLink);
lawPassResetRouter.post("/:id/:token", setNewPassword);

module.exports = lawPassResetRouter;
