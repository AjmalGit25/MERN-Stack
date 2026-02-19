const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.getAllHomes(registeredHomes => {
    res.render('./store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currPage: 'index'
    });
  });
}

exports.getListHomes = (req, res, next) => {
  Home.getAllHomes(registeredHomes => {
    res.render('./store/home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Homes List',
      currPage: 'home'
    });
  });
}

exports.getFavouriteList = (req, res, next) => {
  Home.getAllHomes(registeredHomes => {
    res.render('./store/favourite-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Favourites List',
      currPage: 'favourites'
    });
  });
}

exports.getBookings = (req, res, next) => {
  res.render('./store/bookings', {
    pageTitle: 'airbnb Bookings',
    currPage: 'bookings'
  });
}