// const http = require("http");
const jsonData = require("../data.json");
const host = "localhost";
const port = 9000;
const fs = require("fs");
const express = require("express");
const app = express();

app.get ("/", function (req, res) {
  res.json(jsonData);
  res.end();
})

app.post("/", express.json(), function (req, res) {
  const Data = req.body;
  console.log(Data);
  jsonData.push(Data)
  fs.writeFileSync("../data.json", JSON.stringify(jsonData), function (err) {
    if (err) throw err;
    console.log("updated");
  });
  res.send("recibido");
  res.end();
})


// const requestListener = function (req, res) {
//   res.setHeader("Content-Type", "application/json");
//   res.writeHead(200);
//   res.end(JSON.stringify(jsonData));
// };

// const server = http.createServer(requestListener);
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

module.exports= app;