const express = require("express");
const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  signin,
  signup,
  verifyUserAccount,
} = require("../controllers/userController");
const { isAuth, isAdmin } = require("../util.js");

const userRouter = express.Router();

userRouter.get("/", isAuth, isAdmin, getUsers);
userRouter.get("/:id", isAuth, getUser);
userRouter.put("/:id", isAuth, updateUser);
userRouter.delete("/:id", isAuth, isAdmin, deleteUser);
userRouter.post("/signin", signin);
userRouter.post("/signup", signup);
userRouter.get("/:userId/verify/:token", verifyUserAccount);

module.exports = userRouter;
