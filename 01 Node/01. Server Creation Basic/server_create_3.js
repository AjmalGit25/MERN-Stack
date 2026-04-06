const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  // console.log (req.url, req.headers, req.method);
  res.end('Hello! I am Node.js Server');
  // process.exit ();      // Stops event loop
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});