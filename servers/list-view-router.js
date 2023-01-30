const host = "localhost";
const port = 8080;
const fs = require("fs");
const express = require("express");
const app = express();
const jsonData = require("../data.json");

app.get("/completada", function (req, res) {
  res.send("La tarea esta completada");
  res.json(jsonData);
  res.end();
});

app.get("/incompleta", function (req, res) {
   res.send("La tarea no esta completa ");
  res.json(jsonData);
  res.end();
});


app.listen(port, host, () => {
  console.log(`El servidor está funcionando en http://${host}:${port}`);
});

module.exports = app;
