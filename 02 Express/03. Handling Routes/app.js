const http = require('http');
const express = require('express');

const app = express();

// handling routes
app.use("/", (req, res, next) => {
  console.log("Came from first middleware: ", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Came from second middleware: ", req.url, req.method);
  next();
});

app.use("/submit-details", (req, res, next) => {
  console.log("Came from another middleware: ", req.url, req.method);
  res.send("<h3>Came from another middleware");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});