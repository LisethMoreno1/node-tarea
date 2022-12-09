const http = require("http");
const jsonData = require("../data.json");
const host = "localhost";
const port = 9000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);

  res.end(JSON.stringify(jsonData));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
