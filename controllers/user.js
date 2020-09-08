const User = require("../models/user");
const bcrypt = require("bcryptjs");
// const _ = require("lodash");
const jwt = require("jsonwebtoken");

//function for creating a new user
const createUser = async ({ email, password }) => {
  try {
    const userOld = await User.findOne({ email });
    if (userOld) {
      throw new Error("Email Already in use!");
    }
    const user = await User({
      email,
      password: bcrypt.hashSync(password, 8),
    });
    await user.save();
    const token = await jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET
    );
    const result = { token, user };
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

//function for verifying user for login
const verifyUser = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Account not found");
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      throw new Error("Wrong Password");
    }
    const token = await jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET
    );
    const result = { token, user };
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  verifyUser,
};
