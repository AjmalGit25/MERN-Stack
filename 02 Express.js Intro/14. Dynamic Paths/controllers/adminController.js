const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render('./admin/edit-home', {
    pageTitle: 'Add New Home',
    currPage: 'add-home',    // Passing current page for active link highlighting (optional)
    editing: false
  });
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;   // variable
  const editing = req.query.editing === 'true';  // query
  Home.findById(homeId, home => {
    if (!home) {
      console.log("Home not found for editing!");
      res.redirect("/admin-home-list");
    } else {
      res.render('./admin/edit-home', {
        pageTitle: 'Edit Home',
        currPage: 'admin-home',
        editing: editing,
        home: home
      });
    }
  });
}

exports.postAddHome = (req, res, next) => {
  const home = new Home(req.body.houseName, req.body.price, req.body.locationName, req.body.rating, req.body.photoUrl);
  home.save();

  res.render('./admin/home-added', {
    pageTitle: 'Home Added Successfully',
    currPage: 'home-added'
  });
}

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, locationName, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, locationName, rating, photoUrl);
  home.id = id;
  home.save();

  res.redirect("/admin-home-list");
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Home id to delete: ", homeId);
  Home.deleteById(homeId, error => {
    if (error) {
      console.log("Error while deleting the home!", error);
    }
    res.redirect("/admin-home-list");
  });
}

exports.getAdminHomes = (req, res, next) => {
  Home.getAllHomes(registeredHomes => {
    res.render('./admin/admin-home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Admin Homes List',
      currPage: 'admin-home'
    });
  });
}