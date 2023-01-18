// const express = require("express");
// const jsonData = require("../data.json");
// // const host = "localhost";
// // const port = 8080;
// const fs = require("fs");
// const app = express();
// const eliminar = express.Router();



// app.get("/", function (req, res) {
//   res.json(jsonData);
//   res.end();
// });

// eliminar.get("/eliminar", function (req, res) {
//   res.send("Hola desde aqui eliminar ");
// });

// eliminar.delete("/", express.json(), function (req, res) {
//   const Data = req.body;
//   console.log(Data);
//   jsonData.pop(Data);
//   fs.writeFileSync("../data.json", JSON.stringify(jsonData), function (err) {
//     if (err) throw err;
//     console.log("eliminado");
//   });
//   res.send("eliminado");
//   res.end();
// });



// module.exports = eliminar;
