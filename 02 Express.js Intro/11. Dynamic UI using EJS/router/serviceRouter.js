// Core Modules
const path = require('path');

// External Modules
const express = require('express');
const rootDir = require('../utils/pathUtil');

const serviceRouter = express.Router();

serviceRouter.get("/add-home", (req, res, next) => {
  res.render('add-home', { pageTitle: 'Add New Home' });
});

// An array to store home listings (in-memory)
const registeredHomes = [];

serviceRouter.post("/add-home", (req, res, next) => {
  res.render('home-added-success', { pageTitle: 'Home Added Successfully' });
  registeredHomes.push({ houseName: req.body.houseName, location: req.body.locationName });
  console.log(req.body);
});

exports.serviceRouter = serviceRouter;
exports.registeredHomes = registeredHomes;

// module.exports = {registeredHomes, serviceRouter}; // Alternative way to export multiple things