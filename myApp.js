let express = require("express");
let bodyParser = require("body-parser");
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

app.use("/", bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(assetsPath));

app.get("/", index);

app.get("/json", json);

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  },
);

app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});

app.route("/name").get((req, res) => {
  const { first, last } = req.query;
  res.json({ name: `${first} ${last}` });
});

module.exports = app;
