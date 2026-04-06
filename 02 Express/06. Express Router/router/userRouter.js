// External Module
const express = require('express');

const userRouter = express.Router();

userRouter.use("/", (req, res, next) => {
  res.send(`
    <h1>Welcome to AirBnB</h1>
    <p>Explore our listings and find your perfect stay!</p>
    <a href="/host/add-home">Add New Home</a>
  `);
});

module.exports = userRouter;