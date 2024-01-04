let express = require("express");
let app = express();

const indexPath = __dirname + "/views/index.html";
const assetsPath = __dirname + "/public";

const index = (req, res) => {
  res.sendFile(indexPath);
};

const json = (req, res) => {
  const MESSAGE_STYLE = process.env.MESSAGE_STYLE;
  let message = "Hello json";
  message = MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message;
  res.json({ message });
};

const logger = (req, res, next) => {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  console.log(`${method} ${path} - ${ip}`);
  next();
};

app.use("/", logger);

app.use("/public", express.static(assetsPath));

app.get("/", index);

app.get("/json", json);

module.exports = app;
