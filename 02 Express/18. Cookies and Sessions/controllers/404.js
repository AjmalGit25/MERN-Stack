module.exports = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    currPage: '404',
    isLoggedIn: req.isLoggedIn
  });
};

// Single export of the 404 controller function.