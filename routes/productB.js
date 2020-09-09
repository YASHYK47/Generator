const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
var randomstring = require("randomstring");
const { generate, verify } = require("../controllers/productB.js");
const authenticate = require("../middleware/authenticateUser");

router.post("/generate", authenticate, async (req, res, next) => {
  try {
    const values = await generate(req.body.limit);
    let ts = Date.now();
    const rndm = randomstring.generate(8);
    const newFileName = rndm + ts + ".xlsx";
    //creating new workbook
    let newWb = xlsx.utils.book_new();
    //converting json to sheet
    let newWs = xlsx.utils.json_to_sheet(values);
    //appending sheet to newly created
    xlsx.utils.book_append_sheet(newWb, newWs, "Keys");
    xlsx.writeFile(newWb, `./excel/${newFileName}`);
    res.download(`./excel/${newFileName}`);
  } catch (error) {
    res.json({ success: false, message: error.message, data: {} });
  }
});

router.post("/verify", async (req, res, next) => {
  try {
    if (!req.body.key) {
      throw new Error("Enter value");
    }
    const status = await verify(req.body.key);
    if (status) {
      return res.json({
        success: true,
        message: "Verified",
        data: true,
      });
    }
    return res.json({
      success: false,
      message: "Invalid Key Provided",
      data: true,
    });
  } catch (error) {
    res.json({ success: false, message: error.message, data: {} });
  }
});

module.exports = router;
