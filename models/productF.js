const mongoose = require("mongoose");

const ProductFSchema = new mongoose.Schema(
  {
    val: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductF = mongoose.model("ProductF", ProductFSchema);

module.exports = ProductF;
