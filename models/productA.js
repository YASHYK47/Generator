const mongoose = require("mongoose");

const ProductASchema = new mongoose.Schema(
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

const ProductA = mongoose.model("ProductA", ProductASchema);

module.exports = ProductA;
