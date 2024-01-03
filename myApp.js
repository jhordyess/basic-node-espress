let express = require("express");
let app = express();

const hello = (req, res) => {
  res.send("Hello Express");
};

app.get("/", hello);

module.exports = app;
