const mongoose = require("mongoose");

const ProductHSchema = new mongoose.Schema(
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

const ProductH = mongoose.model("ProductH", ProductHSchema);

module.exports = ProductH;
