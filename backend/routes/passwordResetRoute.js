const express = require("express");
const {
  sendPassword,
  verifyPasswordLink,
  setNewPassword,
} = require("../controllers/passwordReset");

const passwordResetRouter = express.Router();

passwordResetRouter.post("/", sendPassword);
passwordResetRouter.get("/:id/:token", verifyPasswordLink);
passwordResetRouter.post("/:id/:token", setNewPassword);

module.exports = passwordResetRouter;
