// External Modules 
const express = require('express');
const storeRouter = express.Router();

// Local Modules
const storeController = require('../controllers/storeController');

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getListHomes);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavouriteList);
storeRouter.post("/favourites", storeController.postAddToFavourite);
storeRouter.post("/delete-favourite/:homeId", storeController.postRemoveFavourite);

module.exports = storeRouter;  // Exporting single export