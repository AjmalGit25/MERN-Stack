const http = require('http');

// server created
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit ();      // Stops event loop

  // res.setHeader ('Content-Type', 'json');
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Md Ajmal Hussain</title>')
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Sending Responses Demonstration</h1>');
  res.write('<p>Hi, This is my first node js response!!</p>');
  res.write('</body>');
  res.write('</html>');
  res.end('Thank you! I am your Node server.');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});