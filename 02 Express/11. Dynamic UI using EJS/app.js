// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const bodyParser = require('body-parser');

// Local Modules
const homeRouter = require("./router/userRouter");
const {serviceRouter} = require("./router/serviceRouter");    // Importing multiple exports
const rootDir = require('./utils/pathUtil');

// Express App Initialization
const app = express();

app.set('view engine', 'ejs'); // Setting EJS as the templating engine
app.set('views', 'views');      // Setting the views directory

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded());

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.static(path.join(__dirname, './public'))); // Serving Static Files

app.use(homeRouter);
app.use(serviceRouter);
app.use((req, res, next) => {     // 404 Handler
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

const PORT = 5000;
// Starts the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});