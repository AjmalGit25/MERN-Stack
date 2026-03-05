exports.getLogin = (req, res, next) => {
  res.render('./auth/login', {
    pageTitle: 'Login',
    currPage: 'login',
    isLoggedIn: false
  });
}

exports.postLogin = (req, res, next) => {
  console.log("Login request received", req.body);
  req.session.isLoggedIn = true;
  // res.cookie('isLoggedIn', true);
  // req.isLoggedIn = true;
  res.redirect("/homes");
}

exports.postLogout = (req, res, next) => {
  console.log("Logout request received", req.body);
  // res.cookie('isLoggedIn', false);
  // req.session.isLoggedIn = false;
  req.session.destroy((err) => {    // Deletes the current user's session
    console.log("Error while destroying session!", err);
  });
  res.redirect("/");
}