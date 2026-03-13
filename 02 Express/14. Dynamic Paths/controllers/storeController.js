const Favourite = require("../models/favourites");
const Home = require("../models/homes");

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
      currPage: 'homes'
    });
  });
}

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites => {
    Home.getAllHomes(registeredHomes => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
      res.render('./store/favourite-list', {
        favouriteHomes: favouriteHomes,
        pageTitle: 'Favourite Homes List',
        currPage: 'favourites'
      });
    });
  });
}

exports.postAddToFavourite = (req, res, next) => {
  Favourite.addToFavourite(req.body.id, error => {
    if (error) {
      console.log("Error while marking favourite!", error);
    }
    res.redirect("/favourites");
  });
}

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, error => {
    if (error) {
      console.log("Error while removing Home from Favourite", error);
    }
    res.redirect("/favourites");
  });
}

exports.getBookings = (req, res, next) => {
  res.render('./store/bookings', {
    pageTitle: 'airbnb Bookings',
    currPage: 'bookings'
  });
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Home id: ", homeId);
  Home.findById(homeId, home => {
    if (!home) {
      console.log("Home not found: ", home);
      res.redirect("/homes");
    } else {
      console.log("Home details found: ", home);
      res.render('./store/home-detail', {
        home: home,
        pageTitle: 'Home Details',
        currPage: 'homes'
      });
    }
  });
}