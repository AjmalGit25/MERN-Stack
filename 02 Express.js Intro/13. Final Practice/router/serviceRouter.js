// Core Modules

// Local Modules
const homesController = require('../controllers/home');

// External Modules
const express = require('express');

const serviceRouter = express.Router();

// Route to render the form for adding a new home
serviceRouter.get("/add-home", homesController.getAddHome);

// Route to handle form submission for adding a new home
serviceRouter.post("/add-home", homesController.postAddHome);

module.exports = serviceRouter;  // Exporting single export