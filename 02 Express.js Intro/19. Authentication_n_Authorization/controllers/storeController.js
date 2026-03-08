const Favourite = require("../models/favourites");
const Home = require("../models/homes");

exports.getIndex = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render('./store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currPage: 'index',
      isLoggedIn: req.isLoggedIn,
      user: req.session.user
    });
  });
}

exports.getListHomes = (req, res, next) => {
  Home.find().then(registeredHomes => {
    console.log({ isLoggedIn: req.session.isLoggedIn, user: req.session.user });
    res.render('./store/home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Homes List',
      currPage: 'homes',
      isLoggedIn: req.isLoggedIn,
      user: req.session.user
    });
  });
}

exports.getFavouriteList = (req, res, next) => {
  Favourite.find()
    .populate('homeId')
    .then(favourites => {
      const favouriteHomes = favourites.map(fav => fav.homeId);
      console.log("Favourite homes: ", favouriteHomes);
      
      res.render('./store/favourite-list', {
        favouriteHomes: favouriteHomes,
        pageTitle: 'Favourite Homes List',
        currPage: 'favourites',
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
      });
    });
}

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;

  Favourite.findOne({ homeId: homeId }).then(existingFav => {
    if (existingFav) {
      console.log("Home is already added to Favourite");
    } else {
      const fav = new Favourite({ homeId: homeId });
      fav.save().then(() => {
        console.log("Home added to Favourite successfully!");
      });
    }

    res.redirect("/favourites");
  });
}

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({ homeId: homeId }).then(result => {
    console.log("Home removed from Favourite successfully!", result);
  }).catch(err => {
    console.log("Error while removing home from Favourite!", err);
  }).finally(() => {

    res.redirect("/favourites");
  });
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Home id: ", homeId);
  Home.findById(homeId).then(home => {
    if (!home) {
      console.log("Home not found: ", home);
      res.redirect("/homes");
    } else {
      console.log("Home details found: ", home);
      res.render('./store/home-detail', {
        home: home,
        pageTitle: 'Home Details',
        currPage: 'homes',
        isLoggedIn: req.isLoggedIn,
        user: req.session.user
      });
    }
  });
}

exports.getBookings = (req, res, next) => {
  res.render('./store/bookings', {
    pageTitle: 'airbnb Bookings',
    currPage: 'bookings',
    isLoggedIn: req.isLoggedIn,
    user: req.session.user
  });
}