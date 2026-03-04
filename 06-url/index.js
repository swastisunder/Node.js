const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const log = `${Date.now()}: new req receive on ${req.url} from ${req.socket.remoteAddress}\n`;
  const myUrl = url.parse(req.url, true);
  // console.log(myUrl);
  fs.appendFile("log.txt", log, (err) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home");
        break;
      case "/about":
        const username = myUrl.query.name;
        res.end(`about ${username || ""}`);
        break;
      default:
        res.end("404");
    }
  });
});

server.listen(8080, () => {
  console.log(`server is running at http://localhost:8080`);
});
