// controller (talks to browser)

const userData = require('./user_data');

const requestListener = (req, res) => {
  console.log(req.url, req.method);
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.write(`
      <html>
        <head>
          <title>Page Title</title>
        </head>
        <body>
          <h1>This is Homepage</h1>
          <h3>This is server side rendering</h3>
        <body>
      </html>
    `);
    return res.end();
  }
  else if (req.url.toLowerCase() === '/list' && req.method === 'GET') {
    res.write(`
      <html>
        <head>
          <title>Page Title</title>
        </head>
        <body>
          <h1>This is List Page</h1>
          <h3>Below is the list</h3>
          <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
            <li>List 4</li>
            <li>List 5</li>
          </ul>
        <body>
      </html>
    `);
    return res.end();
  }
  else if (req.url.toLowerCase() === '/form' && req.method === 'GET') {
    res.write(`
      <html>
        <head>
          <title>Page Title</title>
        </head>
        <body>
          <h1>This is Form Page</h1>
          <form action="/submit-details" method="POST">
            <input type="text" name="name" placeholder="Enter your name">
            <input type="email" name="email" placeholder="Enter your email">
            <button type="submit" value="Submit">Submit</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }
  else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
    res.write(`
      <html>
        <head>
          <title>Submission Successful</title>
        </head>
        <body>
          <h1>Details Submitted Successfully!</h1>
          <p>Your Name: ${userData.name}</p>
          <p>Your Email: ${userData.email}</p>
        </body>
      </html>
    `);
    return userData(req, res);  // Call the userData function to process the submission
  }

  res.end('Hello, This is my Default Response');
}

module.exports = requestListener;