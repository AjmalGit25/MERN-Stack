const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render('./admin/add-home', {
    pageTitle: 'Add New Home',
    currPage: 'add-home'    // Passing current page for active link highlighting (optional)
  });
}

exports.postAddHome = (req, res, next) => {
  console.log("Just added new home: ", req.body);

  const home = new Home(req.body.houseName, req.body.price, req.body.locationName, req.body.rating, req.body.photoUrl);
  home.save();

  res.render('./admin/home-added', {
    pageTitle: 'Home Added Successfully',
    currPage: 'home-added'    // Passing current page for active link highlighting (optional)
  });
}

exports.getListHomes = (req, res, next) => {
  const registeredHomes = Home.getAllHomes(registeredHomes => {
    res.render('./store/home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currPage: 'home'
    });
  });
}

exports.getBookings = (req, res, next) => {
  res.render('./store/bookings',{
    pageTitle: 'airbnb Bookings',
    currPage: 'bookings'
  });
}