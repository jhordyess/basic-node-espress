let express = require("express");
let app = express();

const filePath = __dirname + "/views/index.html";

const hello = (req, res) => {
  res.sendFile(filePath);
};

app.get("/", hello);

module.exports = app;
