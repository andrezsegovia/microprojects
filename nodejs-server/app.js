const http = require("http");
const net = require("net");
const url = require("url");

const server = new net.createServer(c => {
  // 'connection' listener
  console.log("client connected");
  c.on("end", () => {
    console.log("Client disconnected");
  });
  c.write("hello\r\n");
  c.pipe(c);
});
server.on("error", err => {
  throw err;
});
server.listen('/tmp/echo.sock', () => {
  console.log("server bound");
});
