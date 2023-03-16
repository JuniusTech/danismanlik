const jwt = require("jsonwebtoken");
const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};
const lawToken = (lawyer) => {
  return jwt.sign(
    {
      _id: lawyer._id,
      name: lawyer.name,
      email: lawyer.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};
const isAuth = (req, res, next) => {
  // const authorization = req.headers.authorization;
  const token = req.cookies.jwt;
  if (token) {
    // const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};
const isLawyer = (req, res, next) => {
  // const authorization = req.headers.authorization;
  const token = req.cookies.jwt;
  if (token) {
    // const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.lawyer = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
const isLawyerAdmin = (req, res, next) => {
  if (req.lawyer && req.lawyer.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};

module.exports = {
  generateToken,
  lawToken,
  isLawyer,
  isAuth,
  isAdmin,
  isLawyerAdmin,
};
