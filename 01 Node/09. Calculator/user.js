// user logic (for handling requests and responses)
const sumHandler = require('./calc_res');  // Importing calculator result logic

const requesListener = (req, res) => {
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');   // This should be defined only once

  if (req.url === '/' || req.url.toLowerCase() === '/calculator' && req.method === 'GET') {
    // Serve the HTML form
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write('<body>');

    res.write('<h1>Welcome to the Calculator App</h1>');
    res.write('<form action="/calculate-result" method="POST">');
    res.write('<h3>Enter two numbers to calculate their sum:</h3>');
    res.write('<label for="num1">First Number: </label>');
    res.write('<input type="text" name="num1" id="num1" placeholder="First Number" required>');
    res.write('<br><br>');
    res.write('<label for="num2">Second Number: </label>');
    res.write('<input type="text" name="num2" id="num2" placeholder="Second Number" required>');
    res.write('<br><br style="margin-top: 10px;">');
    res.write('<button type="submit" value="Calculate Sum" style="padding: 10px; font-size: 20px; color: green;">Calculate Sum</button>');
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    return res.end();  // End response after serving form // 'return' to prevent further execution
  }
  else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
    res.write(`
      <html>
        <head><title>Sum Result</title></head>
        <body>
          <h1>Sum Calculation Result</h1>
          <br/>
          <a href="/">Go to Calculator</a>
        </body>
      </html>
    `);
    return sumHandler(req, res);  // Call the sumHandler function to process the calculation
  }

  // Default response
  res.write(`
    <html>
      <head><title>Node.js Server</title></head>
      <body>
        <h1>404 Not Found</h1>
        <a href="/">Go to Calculator</a>
        <br/>
      </body>
    </html>
  `);

  // Last line to end the response
  res.end('Hello! I am your Node.js server.');    // 'res.end()' is necessary to end the response
}

module.exports = requesListener;    