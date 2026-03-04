const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()}: new req receive on ${req.url} from ${req.socket.remoteAddress}\n`;
  fs.appendFile("log.txt", log, (err) => {
    switch (req.url) {
      case "/":
        res.end("Home");
        break;
      case "/about":
        res.end("about");
        break;
      default:
        res.end("404");
    }
  });
});

server.listen(8080, () => {
  console.log(`server is running`);
});
