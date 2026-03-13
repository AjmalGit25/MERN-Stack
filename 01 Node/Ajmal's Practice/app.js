// Server (entry point)

const http = require('http');
const controller = require('./user');

const server = http.createServer((req, res) => {
  // controller.requestListener(req, res);
  controller(req, res);
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});