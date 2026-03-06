// External Modules 
const express = require('express');

// Local Modules
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);

authRouter.get("/signup", authController.getSignup);
authRouter.post("/signup", authController.postSignup);
// authRouter.post('/signup', (req, res) => res.send("Signup route works!"));

module.exports = authRouter; 