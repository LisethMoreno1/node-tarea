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

// Agregar
app.post("/agregar", express.json(), function (req, res) {
  const Data = req.body;
  console.log(Data);
  jsonData.push(Data);
  fs.writeFileSync("../data.json", JSON.stringify(jsonData), function (err) {
    if (err) throw err;
    console.log("recibido");
  });
  res.send("recibido");
  res.end();
});

// Eliminar
app.delete("/eliminar", express.json(), function (req, res) {
  const Data = req.body;
  console.log(Data);
  jsonData.pop(Data);
  fs.writeFileSync("../data.json", JSON.stringify(jsonData), function (err) {
    if (err) throw err;
    console.log("eliminado");
  });
  res.send("eliminado");
  res.end();
});

// editar

app.put("/editar/:id", express.json(), function (req, res) {
  const Data = req.body;
  console.log(Data);
  const { id } = req.params;
  const jsonData = JSON.parse(fs.readFileSync("../data.json", "utf-8"));
  jsonData.forEach((tarea) => {
    if (tarea.id == id) {
      tarea.descripcion = req.body.descripcion;
      tarea.fecha = req.body.fecha;
    }
  });
  fs.writeFileSync("../data.json", JSON.stringify(jsonData), function (err) {
    if (err) throw err;
    console.log("editado");
  });
  res.json({ message: `Tarea ${id}  ha sido actualizada` });
  res.end();
});

app.listen(port, host, () => {
  console.log(`El servidor está funcionando en http://${host}:${port}`);
});

module.exports = app;
