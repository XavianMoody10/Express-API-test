const express = require("express");
const { info } = require("./data");

const app = express();

app.use("/", (req, res) => {
  res.send(info);
});

app.listen(3001);
