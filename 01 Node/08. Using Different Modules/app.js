// server starts here
const http = require('http');
const requestHandler = require('./user');  // Importing user module

const server = http.createServer(requestHandler);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Note:
// You always run the file that starts the server.
// In this case, it's app.js (sometimes named server.js or index.js).
// So, run the command: node app.js