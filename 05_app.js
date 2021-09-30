const http = require('http');

const requestListener = (req, res) => {
  console.log(req.url, req.method);
  //process.exit();
}

const server = http.createServer(requestListener);

server.listen(3000);