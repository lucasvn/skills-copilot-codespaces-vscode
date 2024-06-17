const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const { method, url, headers } = req;

  if (method === 'GET' && url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': 10,
      'Custom-Header': 'Hello World',
    });
    res.end('<h1>Hello World</h1>');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
