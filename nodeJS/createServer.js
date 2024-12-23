const http = require("node:http");

const server = http.createServer((request, response) => {
  if (request.url === "/home") {
    response.end(" You Are In Home Page !!");
  } else {
    response.end("Hello World From Server !!");
  }
});

server.listen(7777);
