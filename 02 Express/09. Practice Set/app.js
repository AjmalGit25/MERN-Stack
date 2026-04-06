// Core Modules
const http = require('http');
const path = require('path');

// External Modules
const express = require('express');
const bodyParser = require('body-parser');

// Local Module
const homeRouter = require("./router/homeRouter");
const contactRouter = require("./router/contactRouter");
const rootDir = require('./utils/pathUtil');

const app = express();

app.use(express.urlencoded());

// Sequence matters -- These are middlewares
app.use((req, res, next) => {             // This middleware logs every request made by the browser
  console.log(req.url, req.method);
  next();
});

app.use(homeRouter);
app.use(contactRouter);

// Adding 404 Handler
app.use((req, res, next) => {     // 404 Handler
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});

// Starts the server
const PORT = 3000;

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});