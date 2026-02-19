// Core Modules

// Local Modules
const adminController = require('../controllers/adminController');

// External Modules
const express = require('express');

const adminRouter = express.Router();

// Route to render the form for adding a new home
adminRouter.get("/add-home", adminController.getAddHome);

// Route to handle form submission for adding a new home
adminRouter.post("/add-home", adminController.postAddHome);

adminRouter.get("/admin-home-list", adminController.getAdminHomes);

module.exports = adminRouter;  // Exporting single export