// An array to store home listings (in-memory)
const registeredHomes = [];

exports.getAddHome = (req, res, next) => {
  res.render('add-home', {
    pageTitle: 'Add New Home',
    currPage: 'add-home'    // Passing current page for active link highlighting (optional)
  });
}

exports.postAddHome = (req, res, next) => {
  res.render('home-added-success', {
    pageTitle: 'Home Added Successfully',
    currPage: 'add-home'    // Passing current page for active link highlighting (optional)
  });
  registeredHomes.push({ houseName: req.body.houseName, location: req.body.locationName });
  console.log("Just added homes: ", req.body);
}

exports.getListHomes = (req, res, next) => {
  console.log(registeredHomes);
  res.render('home', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home' });
}