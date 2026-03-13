const http = require('http');

// server created
const server = http.createServer((req, res) => {
  // console.log (req);
  console.log(req.url, req.method, req.headers);
  // process.exit ();      // Stops event loop and exits program

  // Routing
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Home</title>')
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Welcome to Home</h1>');
    res.write('<p>Hi, This is my first node js response!!</p>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Home</title>')
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Welcome to Products</h1>');
    res.write('<p>Hi, This is my first node js response!!</p>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  // Default response
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Md Ajmal Hussain</title>')
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Routing Requests Demonstration</h1>');
  res.write('<p>Hi, This is my first node js response!!</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();           // 'return' is optional here, because it's the last statement
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});