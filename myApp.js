let express = require("express");
let app = express();

const indexPath = __dirname + "/views/index.html";
const assetsPath = __dirname + "/public";

const index = (req, res) => {
  res.sendFile(indexPath);
};

const json = (req, res) => {
  res.json({ message: "Hello json" });
};

app.use("/public", express.static(assetsPath));

app.get("/", index);

app.get("/json", json);

module.exports = app;
