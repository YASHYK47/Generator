const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/mongoose");
const apiRoutes = require("./routes");
const upload = require("express-fileupload");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(upload());

apiRoutes.includeRoutes(app);

app.get("*", (req, res, next) => {
  return next({ message: "I lost!", status: 404 });
});

app.use((err, req, res, next) => {
  res.status(401).json({
    success: false,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server up and running in 3000");
});

module.exports = { app };
