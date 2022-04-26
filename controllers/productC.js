const ProductC = require("../models/productC");
var randomstring = require("randomstring");

const generate = async (limit = 500) => {
  try {
    const ans = [];
    const old_keys = await ProductC.find({}, { val: 1, _id: 0 });
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
    await ProductC.insertMany(ans);
    return ans;
  } catch (error) {
    // console.log(error);
    throw new Error(error.message);
  }
};

const arr = [
  "0",
  "00",
  "000",
  "0000",
  "00000",
  "000000",
  "0000000",
  "00000000",
];

const verify = async (val) => {
  try {
    let newVal = val;
    const x = 8 - newVal.length;
    if(x < 8){
      newVal = arr[ x - 1 ] + val;
    }
    const old_key = await ProductC.findOne({ val: newVal });
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
