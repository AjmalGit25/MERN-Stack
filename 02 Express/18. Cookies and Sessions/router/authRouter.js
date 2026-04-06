// External Modules 
const express = require('express');

// Local Modules
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);

module.exports = authRouter; 