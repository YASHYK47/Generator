const ProductE = require("../models/productE");
var randomstring = require("randomstring");

const generate = async (limit = 500) => {
  try {
    const ans = [];
    const old_keys = await ProductE.find({}, { val: 1, _id: 0 });
    for (i = 0; i < limit; i++) {
      const rndm = await randomstring.generate({
        length: 8,
        charset: "numeric",
      });
      if (old_keys.findIndex((x) => x.val === rndm) === -1) {
        ans.push({ val: rndm });
        old_keys.push({ val: rndm });
      }
    }
    await ProductE.insertMany(ans);
    return ans;
  } catch (error) {
    // console.log(error);
    throw new Error(error.message);
  }
};

const verify = async (val) => {
  try {
    const old_key = await ProductE.findOne({ val });
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
