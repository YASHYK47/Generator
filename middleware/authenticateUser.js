const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const User = require("../models/user");

//User authentication middleware
const auth = async (req, res, next) => {
  try {
    if (!req.header("x-auth")) {
      throw new Error("Authentication Required");
    }
    const token = req.header("x-auth");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      throw new Error("Authentication Required");
    }
    const user = await User.findOne({ _id: decoded._id });
    if (!user) {
      throw new Error("Authentication Required1");
    }
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    // console.log(e);
    next(e);
  }
};

module.exports = auth;
