const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {     // Middleware for all routes
  console.log('Came in another middleware:', req.url, req.method);
  // res.send('<h1>Welcome to Homepage!</h1>');
  next();
});

app.use(("/", (req, res, next) => {     // Middleware for all routes
  console.log('Came in first middleware:', req.url, req.method);
  // res.send('<h1>Welcome to Homepage!</h1>');
  next();
}));

app.use(("/submit-details", (req, res, next) => {
  console.log('Came in second middleware:', req.url, req.method);
  res.send('<h1>Details submitted!</h1>');    // send = end
}));

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});