const mongoose = require("mongoose");

const ProductCSchema = new mongoose.Schema(
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

const ProductC = mongoose.model("ProductC", ProductCSchema);

module.exports = ProductC;
