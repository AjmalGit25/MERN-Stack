// Entry point: Server starts here

const testingSyntax = require('./syntax.js');
const runtime = require('./runtime.js');
const logical = require('./logical.js');
const userRequestHandler = require('./user.js');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // testingSyntax();
  // runtime();
  logical();
  res.end('Hello, I am your Node.js server - Ajmal Hussain!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});