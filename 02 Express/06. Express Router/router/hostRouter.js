// External Modules
const express = require('express');

const hostRouter = express.Router();  

hostRouter.get('/host/add-home', (req, res, next) => {
  res.send(`
    <h1>Add a New Home</h1>
    <form action="/host/add-home" method="POST">
      <label for="name">Home Name:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="location">Location:</label><br>
      <input type="text" id="location" name="location"><br><br>
      <input type="submit" value="Submit">
    </form>
  `);
});

hostRouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1>New Home added successfully.</h1>
    <a href="/">Go to Home</a>
  `);
});

module.exports = hostRouter;