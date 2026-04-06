const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('add-home', {
    pageTitle: 'Add New Home',
    currPage: 'add-home'    // Passing current page for active link highlighting (optional)
  });
}

exports.postAddHome = (req, res, next) => {
  console.log("Just added new home: ", req.body);

  const home = new Home(req.body.houseName, req.body.price, req.body.locationName, req.body.rating, req.body.photoUrl);
  home.save();

  res.render('home-added-success', {
    pageTitle: 'Home Added Successfully',
    currPage: 'add-home'    // Passing current page for active link highlighting (optional)
  });
}

exports.getListHomes = (req, res, next) => {
  const registeredHomes = Home.getAllHomes(registeredHomes => {
    res.render('home', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home'
    });
  });
}