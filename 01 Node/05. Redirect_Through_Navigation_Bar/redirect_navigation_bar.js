// Node.js server
const http = require ('http');

const server = http.createServer ((req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.write('<h1>You are in Home Page</h1>');
    return res.end();
  }
  else if (req.url === '/men') {
    res.write('<h1>You are in Men Page</h1>');
    return res.end();
  }
  else if (req.url === '/women') {
    res.write('<h1>You are in Women Page</h1>');
    return res.end();
  }
  else if (req.url === '/kids') {
    res.write('<h1>You are in Kids Page</h1>');
    return res.end();
  }
  else if (req.url === '/cart') {
    res.write('<h1>You are in Cart Page</h1>');
    return res.end();
  }

  res.setHeader ('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Redirect Navigation Bar</title></head>');
  res.write('<body>');

  res.write('<h1>Welcome to My Node.js Server</h1>');
  res.write('<nav>');
  res.write('<ul>');
  res.write('<li><a href="/">Home</a></li>');
  res.write('<li><a href="/men">Men</a></li>');
  res.write('<li><a href="/women">Women</a></li>');
  res.write('<li><a href="/kids">Kids</a></li>');
  res.write('<li><a href="/cart">Cart</a></li>');
  res.write('</ul>');
  res.write('</nav>');

  res.write('</body>');
  res.write('</html>');
  res.end ('Hello, I am your node server. Thank you for using me!');
});
const PORT = 5000;
server.listen (PORT, () => {
  console.log (`Server is listening on address http://localhost:${PORT}`);
});
