const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoute");
const branchRouter = require("./routes/branchRoute");
const lawyerRouter = require("./routes/lawyerRoute");
const supportRouter = require("./routes/supportRoute");
const mongoSanitize = require("express-mongo-sanitize");
const passwordResetRouter = require("./routes/passwordResetRoute");
const lawPassResetRouter = require("./routes/lawPassResetRoute");
const session = require("express-session");
const cors = require("cors");
const dateRouter = require("./routes/dateRoute");
const uploadRouter = require("./routes/upLoadRoute");

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

app.use(
  session({
    secret: "somethingsecretgoeshere",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24, // Çerez ömrü (1 gün)
    },
  })
);
app.use(
  cors({
    origin: process.env.FRONTEND_BASE_URL,
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(
  cookieParser({
    origin: process.env.FRONTEND_BASE_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  mongoSanitize({
    replaceWith: "_",
  })
);
app.use("/api/upload", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/branchs", branchRouter);
app.use("/api/lawyers", lawyerRouter);
app.use("/api/dates", dateRouter);
app.use("/api/support", supportRouter);
app.use("/api/password-reset", passwordResetRouter);
app.use("/api/law-password-reset", lawPassResetRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
