const http = require('http');

const requestListener = (req, res) => {
  //console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Test Example</title></head>');
  res.write('<body><h1>Hola!!</h1></body>');
  res.write('</html>');
  res.end();
}

const server = http.createServer(requestListener);

server.listen(3000);