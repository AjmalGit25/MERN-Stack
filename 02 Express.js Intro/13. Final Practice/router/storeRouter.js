// External Modules 
const express = require('express');

// Local Modules
const storeController = require('../controllers/storeController'); // Importing all exports from home controller

const storeRouter = express.Router();

// Router for homepage / landing page
storeRouter.get("/", storeController.getIndex);

storeRouter.get("/home", storeController.getListHomes);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavouriteList);

module.exports = storeRouter;  // Exporting single export