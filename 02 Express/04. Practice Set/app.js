// Core Modules
const http = require('http');

// External Modules
const express = require('express');

const app = express();

// Middleware 1
// app.use((req, res, next) => {
//   console.log("First Dummy Middleware Executed", req.url, req.method);
//   res.send("<h1>Welcome to Homepage: Express.js Middleware 1</h1>");
  // next();
// });

// Middleware 2
app.get("/", (req, res, next) => {
  console.log("Second Dummy Middleware Executed", req.url, req.method);
  res.send("<h1>Welcome to Main Homepage: Express.js Middleware 2</h1>");
  // next();
});

// Middleware 3
app.get("/home", (req, res, next) => {
  console.log("Third Dummy Middleware Executed", req.url, req.method);
  res.send("<h1>Hello from Express.js Middleware 3</h1>");
  // next();
});

// Middleware 4
// app.get("/", (req, res, next) => {
//   console.log("Handling / for GET", req.url, req.method);
//   res.send("<h1>Hello from Express.js GET /</h1>");
// });

// Middleware 5
app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <html>
      <head>
        <title>Document title</title>
      </head>
      <body>
        <h1>Welcome to Form Page</h1>
        <h3>Enter your credentials</h3>

        <form action="/contact-us" method="POST">
          <label>Name: </label>
          <input type="text" name="name">
          <label>Email: </label>
          <input type="email" name="email">

          <button type="submit" value="Submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// Middleware 6
app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send("<h1>We will contact you shortly!</h1>");
});

// Starting the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});