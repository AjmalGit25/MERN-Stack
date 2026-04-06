// Core Module
const path = require('path');

// External Modules
const express = require('express');
const bodyParser = require('body-parser');

// Local Module
const rootDir = require('../utils/pathUtil');

const contactRouter = express.Router();   // What does it mean? Ans: Creates a new router object

// Route 1 (GET Request)
contactRouter.get("/contact-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html')); // Serving html file to the browser
});

// Route 2 (POST Request)
contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'contact-success.html'));
});

module.exports = contactRouter;