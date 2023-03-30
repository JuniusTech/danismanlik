const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoute");
const branchRouter = require("./routes/branchRoute");
const lawyerRouter = require("./routes/lawyerRoute");
const mongoSanitize = require("express-mongo-sanitize");
const passwordResetRouter = require("./routes/passwordResetRoute");
const lawPassResetRouter = require("./routes/lawPassResetRoute");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);

app.use("/api/users", userRouter);
app.use("/api/branchs", branchRouter);
app.use("/api/lawyers", lawyerRouter);
app.use("/api/password-reset", passwordResetRouter);
app.use("/api/law-password-reset", lawPassResetRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
