// user logic
const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');

  if (req.url.toLowerCase() === '/' && req.method == "GET") {
    res.write('<html>');
    res.write('<head><title>Buffer Chunks Example</title></head>');
    res.write('<body>');

    res.write('<h1>Welcome to the Buffer Chunks Example Page</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<label for="name">Name: </label>');
    res.write('<input type="text" id="name" name="name"><br><br>');
    res.write('<label for="age">Age: </label>');
    res.write('<input type="number" id="age" name="age"><br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url.toLowerCase() === '/submit-details' && req.method == "POST") {
    const body = [];    // Initialize an array to store chunks

    req.on('data', chunk => {
      // console.log('Received chunk:', chunk.toString());
      console.log('Received chunk:', chunk);
      body.push(chunk); // Push the received chunk to the array
    });

    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log("Full body:", fullBody);

      // Parsing request
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log("bodyObject is: ", bodyObject);

      // Writing to a file
      fs.writeFile("user-details.txt", JSON.stringify(bodyObject), error => {
        console.log("Data written unsuccessful.");
      });
      res.statusCode = 302;
      res.setHeader('Location', '/');    // redirect to home    (Manual redirect (low-level))
      return res.end();
    });
  }
  else {
    // Default response for other routes
    res.write('<html>');
    res.write('<head><title>Event Loop Understanding</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to the Event Loop Understanding Page</h1>');
    res.write('<h3>Hi, I am Md Ajmal Hussain</h3>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  }
}

// Exporting the userRequestHandler function
module.exports = userRequestHandler;