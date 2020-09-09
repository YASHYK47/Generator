const ProductA = require("../models/productA");
var randomstring = require("randomstring");

const generate = async (limit = 2000) => {
  try {
    const ans = [];
    for (i = 0; i < limit; i++) {
      const rndm = await randomstring.generate({
        length: 8,
        readable: true,
        charset: "numeric",
      });
      const old_key = await ProductA.findOne({ val: rndm });
      if (!old_key) {
        const new_key = await ProductA({
          val: rndm,
        });
        await new_key.save();
        if (new_key) {
          ans.push({ productA_keys: rndm });
        }
      }
    }
    return ans;
  } catch (error) {
    // console.log(error);
    throw new Error(error.message);
  }
};

const verify = async (val) => {
  try {
    const old_key = await ProductA.findOne({ val });
    if (old_key) {
      return true;
    } else {
      throw new Error("Invalid Key Provided");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  verify,
  generate,
};
