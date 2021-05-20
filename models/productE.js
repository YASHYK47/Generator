const mongoose = require("mongoose");

const ProductESchema = new mongoose.Schema(
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

const ProductE = mongoose.model("ProductE", ProductESchema);

module.exports = ProductE;
