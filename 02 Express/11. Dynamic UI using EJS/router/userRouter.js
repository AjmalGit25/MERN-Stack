// Core Modules
const path = require('path');

// External Modules 
const express = require('express');

// Local Modules
const {registeredHomes} = require('./serviceRouter');
const rootDir = require('../utils/pathUtil');

const homeRouter = express.Router();
// Router for homepage / landing page
homeRouter.get('/', (req, res, next) => { 
  console.log('I am from userRouter: ', registeredHomes);
  res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
});

module.exports = homeRouter;