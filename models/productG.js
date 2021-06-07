const mongoose = require("mongoose");

const ProductGSchema = new mongoose.Schema(
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

const ProductG = mongoose.model("ProductG", ProductGSchema);

module.exports = ProductG;
