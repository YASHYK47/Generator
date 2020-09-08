const mongoose = require("mongoose");

const ProductBSchema = new mongoose.Schema(
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

const ProductB = mongoose.model("ProductB", ProductBSchema);

module.exports = ProductB;
