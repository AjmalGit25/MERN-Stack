const Favourite = require("../models/favourites");
const Home = require("../models/homes");

exports.getIndex = (req, res, next) => {
  Home.getAllHomes().then(registeredHomes => {
    res.render('./store/index', {
      registeredHomes: registeredHomes,
      pageTitle: 'airbnb Home',
      currPage: 'index'
    });
  });
}

exports.getListHomes = (req, res, next) => {
  Home.getAllHomes().then(registeredHomes => {
    res.render('./store/home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Homes List',
      currPage: 'homes'
    });
  });
}

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites().then(favourites => {
    favourites = favourites.map(fav => fav.homeId);
    Home.getAllHomes().then(registeredHomes => {
      console.log(favourites, registeredHomes);
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home._id.toString()));
      res.render('./store/favourite-list', {
        favouriteHomes: favouriteHomes,
        pageTitle: 'Favourite Homes List',
        currPage: 'favourites'
      });
    });
  });
}

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite(homeId);

  fav.save().then(result => {
    console.log("Home added to Favourite successfully!", result);
  }).catch(err => {
    console.log("Error while adding home to Favourite!", err);
  }).finally(() => {
    res.redirect("/favourites");
  });
}

exports.postRemoveFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId).then(result => {
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
        currPage: 'homes'
      });
    }
  });
}

exports.getBookings = (req, res, next) => {
  res.render('./store/bookings', {
    pageTitle: 'airbnb Bookings',
    currPage: 'bookings'
  });
}