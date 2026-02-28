// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const bodyParser = require('body-parser');

// Local Modules
const homeRouter = require("./router/storeRouter");
const serviceRouter = require("./router/adminRouter");    // Importing single export from serviceRouter
const pageNotFoundController = require('./controllers/404');
const rootDir = require('./utils/pathUtil');
const db = require('./utils/databaseUtil');

// Express App Initialization
const app = express();

app.set('view engine', 'ejs');  // Setting EJS as the templating engine
app.set('views', 'views');      // Setting the views directory

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded());

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.static(path.join(rootDir, './public')));  // Serving Static Files
// app.use(express.static('public'));                     // (Alternative way)

app.use(homeRouter);
app.use(serviceRouter);

// 404 handler (should be last)
app.use(pageNotFoundController);

const PORT = 7000;
// Starts the server
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});