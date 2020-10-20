const mongoose = require("mongoose");

const ProductDSchema = new mongoose.Schema(
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

const ProductD = mongoose.model("ProductD", ProductDSchema);

module.exports = ProductD;
