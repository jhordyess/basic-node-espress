let express = require("express");
let app = express();

const indexPath = __dirname + "/views/index.html";
const assetsPath = __dirname + "/public";

const hello = (req, res) => {
  res.sendFile(indexPath);
};

app.use("/public", express.static(assetsPath));

app.get("/", hello);

module.exports = app;
