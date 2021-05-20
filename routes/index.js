const api = {};

api.includeRoutes = (app) => {
  const user = require("./user");
  const productA = require("./productA");
  const productB = require("./productB");
  const productC = require("./productC");
  const productD = require("./productD");
  const productE = require("./productE");

  app.use("/api/user", user);
  app.use("/api/productA", productA);
  app.use("/api/productB", productB);
  app.use("/api/productC", productC);
  app.use("/api/productD", productD);
  app.use("/api/productE", productE);
};

module.exports = api;
