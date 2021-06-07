const api = {};

api.includeRoutes = (app) => {
  const user = require("./user");
  const productA = require("./productA");
  const productB = require("./productB");
  const productC = require("./productC");
  const productD = require("./productD");
  const productE = require("./productE");
  const productF = require("./productF");
  const productG = require("./productG");
  const productH = require("./productH");

  app.use("/api/user", user);
  app.use("/api/productA", productA);
  app.use("/api/productB", productB);
  app.use("/api/productC", productC);
  app.use("/api/productD", productD);
  app.use("/api/productE", productE);
  app.use("/api/productF", productF);
  app.use("/api/productG", productG);
  app.use("/api/productH", productH);
};

module.exports = api;
