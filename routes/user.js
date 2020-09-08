const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const { createUser, verifyUser } = require("../controllers/user.js");

//User registeration API
router.post("/register", async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Email or password missing");
    }
    const data = await createUser(req.body);
    return res.json({
      success: true,
      message: "User registered successfully!",
      data,
    });
  } catch (error) {
    res.json({ success: false, message: error.message, data: {} });
  }
});

//User login API
router.post("/login", async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Email or password missing");
    }
    const data = await verifyUser(req.body);
    return res.json({
      success: true,
      message: "User logged in successfully!",
      data,
    });
  } catch (error) {
    res.json({ success: false, message: error.message, data: {} });
  }
});

//Route for the Admin to remove all files
router.get("/removeFiles", (req, res, next) => {
  try {
    fs.readdir("./excel", (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join("./excel", file), (err) => {
          if (err) throw err;
        });
      }
    });
    res.json({
      success: true,
      message: "Files Deleted successfully!",
    });
  } catch (error) {
    res.json({ success: false, message: error.message, data: {} });
  }
});

module.exports = router;
