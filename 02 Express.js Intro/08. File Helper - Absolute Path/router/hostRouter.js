// Core Module
const path = require('path');

// External Modules
const express = require('express');

// Local Module
const rootDir = require('../utils/pathUtil');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-home.html'));
});

hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home-added.html'));
  console.log(req.body);
});

module.exports = hostRouter;