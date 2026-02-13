// Core Modules
const path = require('path');

// External Modules 
const express = require('express');

// Local Modules
const homesController = require('../controllers/home'); // Importing all exports from home controller

const homeRouter = express.Router();

// Router for homepage / landing page
homeRouter.get("/", homesController.getListHomes);

module.exports = homeRouter;  // Exporting single export