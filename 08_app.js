const http = require('http');
const fs = require('fs');
const path = require('path');

const requestListener = (req, res) => {
  // => /
  // => /message
  res.setHeader('Content-Type', 'text/html');
  const [url, method] = [req.url, req.method];
  if(url === '/') {
    res.write('<html>');
    res.write('<body>');
    res.write('<form action="/message" method="POST">');
    res.write('<input type="text" name="msg"><button type="submit">Enviar mensaje!</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (url === '/message' && method === 'POST') {
    const reqBody = [];
    // input data chunks
    req.on('data', (chunk) => {
      console.log(chunk);
      reqBody.push(chunk);
    });
    // input total
    req.on('end', ()=> {
      const parseBody = Buffer.concat(reqBody).toString('utf8');
      console.log(parseBody);
      const msg = parseBody.split('=')[1];
      fs.writeFileSync(
        path.join('.', path.sep, 'files', 'log.txt'), 
        `The user input is: ${msg}\n`, 
        {flag: 'a'});
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.write('<html><body><h1>This is not the page you are looking for</h1></body></html>')
  res.end();
}

const server = http.createServer(requestListener);

server.listen(3000);