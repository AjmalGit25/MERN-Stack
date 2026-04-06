const http = require ('http');

const server = http.createServer ((req, res) => {
  console.log (req.url, req.headers, req.method);
  // res.end ('Hi, This is Node.js server!');
  // process.exit ();
  /* This is all examples of Server-side rendering */
  if (req.url === '/') {
    res.setHeader ('Content-Type', 'text/html');
    res.write ('<html>');
    res.write ('<head>');
    res.write ('<title>Taking User Input</title>');
    res.write ('</head>');
    res.write ('<body>');
    res.write ('<h1>Enter Your Details</h1>')
    res.write ('<form action="/submit-details" method="POST">');
    res.write ('<label for="name">Name: <label>');
    res.write ('<input type="text" id="name" name="name" placeholder="Enter your name">');
    res.write ('<label for="age">Age: <label>');
    res.write ('<input type="number" id="age" name="age" placeholder="Enter your age">');
    res.write ('<label for="gender">Gender: <label>');
    res.write ('<label for="male">Male <label>');
    res.write ('<input type="radio" id="male" name="gender" value="male">');
    res.write ('<label for="female">Female <label>');
    res.write ('<input type="radio" id="female" name="gender" value="female">');
    res.write ('<input type="submit" value="Submit">');
    res.write ('</form>');
    res.write ('</body>');
    res.write ('</html>');
    return res.end ();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>Md Ajmal Hussain</title>')
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Details submitted successfully!</h1>');
  res.write('<p>Hi, This is my first node js response!!</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();           // 'return' is optional here
});

const PORT = 3000;
server.listen (PORT, () => {
  console.log (`Server is listening on address http://localhost:${PORT}`);
});