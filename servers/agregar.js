// const jsonData = require("../data.json");
// const host = "localhost";
// const port = 8080;
// const fs = require("fs");
// const express = require("express");
// const app = express();




// app.get("/agregar", function (req, res) {
//   res.json(jsonData);
//   res.end();
// });

// // Agregar
// app.post("/agregar", express.json(), function (req, res) {
//   const Data = req.body;
//   console.log(Data);
//   jsonData.push(Data);
//   fs.writeFileSync("../data.json", JSON.stringify(jsonData), function (err) {
//     if (err) throw err;
//     console.log("recibido");
//   });
//   res.send("recibido");
//   res.end();
// });


// app.listen(port, host, () => {
//   console.log(`El servidor está funcionando en http://${host}:${port}`);
// });

// module.exports = agregar;
