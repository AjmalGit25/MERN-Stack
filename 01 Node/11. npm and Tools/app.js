// Server starts here

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received:', req.url, req.method);

  res.end('Hello, I am your Node.js server!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});