const jsonData = require("../data.json");
const host = "localhost";
const port = 8080;
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json(jsonData);
  res.end();
});

app.listen(port, host, () => {
  console.log(`El servidor está funcionando en http://${host}:${port}`);
});

module.exports = app;
