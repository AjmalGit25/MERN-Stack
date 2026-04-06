const Home = require("../models/homes");

exports.getAddHome = (req, res, next) => {
  res.render('./admin/edit-home', {
    pageTitle: 'Add New Home',
    currPage: 'add-home',
    editing: false
  });
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;              // variable
  const editing = req.query.editing === 'true';  // query

  Home.findById(homeId).then(home => {
    if (!home) {
      console.log("Home not found for editing!");
      return res.redirect("/admin-home-list");
    }

    console.log("Home found for editing: ", home);
    res.render('./admin/edit-home', {
      pageTitle: 'Edit Home',
      currPage: 'admin-home',
      editing: editing,
      home: home
    });
  }
  );
}

exports.postAddHome = (req, res, next) => {
  const home = new Home(req.body.houseName, req.body.price, req.body.locationName, req.body.rating, req.body.photoUrl, req.body.description);
  home.save().then((result) => {
    console.log("Home added successfully!", result);
    res.redirect("/admin-home-list");
  }).catch((err) => {
    console.log("Error while adding home!", err);
  });
}

exports.postEditHome = (req, res, next) => {
  const { houseName, price, locationName, rating, photoUrl, description, id } = req.body;
  const home = new Home(houseName, price, locationName, rating, photoUrl, description, id);

  home.save().then((result) => {
    console.log("Home updated successfully!", result);
    res.redirect("/admin-home-list");
  }).catch((err) => {
    console.log("Error while updating the home!", err);
  });
}

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Home id to delete: ", homeId);
  Home.deleteById(homeId).then(result => {
    console.log("Home deleted successfully!", result);
    res.redirect("/admin-home-list");
  }).catch(err => {
    console.log("Error while deleting the home!", err);
  });
}

exports.getAdminHomes = (req, res, next) => {
  Home.getAllHomes().then(registeredHomes => {
    res.render('./admin/admin-home-list', {
      registeredHomes: registeredHomes,
      pageTitle: 'Admin Homes List',
      currPage: 'admin-home'
    });
  });
}