// Core Modules

// Local Modules
const adminController = require('../controllers/adminController');

// External Modules
const express = require('express');
const adminRouter = express.Router();

adminRouter.get("/add-home", adminController.getAddHome);
adminRouter.post("/add-home", adminController.postAddHome);
adminRouter.get("/admin-home-list", adminController.getAdminHomes);
adminRouter.get("/edit-home/:homeId", adminController.getEditHome);
adminRouter.post("/edit-home", adminController.postEditHome);
adminRouter.post("/delete-home/:homeId", adminController.postDeleteHome);

module.exports = adminRouter;  // Exporting single export