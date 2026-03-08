const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render('./admin/edit-home', {
    pageTitle: 'Add New Home',
    currPage: 'add-home',
    editing: false,
    isLoggedIn: req.isLoggedIn,
    user: req.session.user
  });
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;              // variable
  const editing = req.query.editing === 'true';  // query

  Home.findById(homeId).then(home => {
    if (!home) {
      console.log("Home not found for editing!");
      return res.redirect("/admin/admin-home-list");
    }

    console.log("Home found for editing: ", home);
    res.render('./admin/edit-home', {
      pageTitle: 'Edit Your Home',
      currPage: 'admin-home',
      editing: editing,
      home: home,
      isLoggedIn: req.isLoggedIn,
      user: req.session.user
    });
  });
}

exports.getAdminHomes = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render('./admin/admin-home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Admin Homes List',
      currPage: 'admin-home',
      isLoggedIn: req.isLoggedIn,
      user: req.session.user
    });
  });
}

exports.postAddHome = (req, res, next) => {
  const { houseName, price, locationName, rating, photoUrl, description } = req.body;
  const home = new Home({ houseName, price, locationName, rating, photoUrl, description });
  home.save().then(() => {
    console.log("Home added successfully!");
  }).catch((err) => {
    console.log("Error while adding home!", err);
  });

  res.redirect("/admin/admin-home-list");
}

exports.postEditHome = (req, res, next) => {
  const { houseName, price, locationName, rating, photoUrl, description, id } = req.body;

  Home.findById(id).then(home => {
    home.houseName = houseName;
    home.price = price;
    home.locationName = locationName;
    home.rating = rating;
    home.photoUrl = photoUrl;
    home.description = description;
    home.save().then((result) => {
      console.log("Home updated successfully!", result);
    }).catch((err) => {
      console.log("Error while updating the home!", err);
    });

    res.redirect("/admin/admin-home-list");
  }).catch(err => {
    console.log("Error while finding home!", err);
  });
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Home id to delete: ", homeId);

  Home.findByIdAndDelete(homeId).then(result => {
    console.log("Home deleted successfully!", result);
    res.redirect("/admin/admin-home-list");
  }).catch(err => {
    console.log("Error while deleting the home!", err);
  });
}