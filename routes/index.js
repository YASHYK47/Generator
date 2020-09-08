const api = {};

api.includeRoutes = (app) => {
  const user = require("./user");
  const productA = require("./productA");
  const productB = require("./productB");
  const productC = require("./productC");

  app.use("/api/user", user);
  app.use("/api/productA", productA);
  app.use("/api/productB", productB);
  app.use("/api/productC", productC);
};

module.exports = api;