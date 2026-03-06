// External Modules
const { check, validationResult } = require('express-validator');

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

exports.getSignup = (req, res, next) => {
  console.log("Signup request received", req.body);

  res.render('./auth/signup', {
    pageTitle: 'Signup',
    currPage: 'signup',
    isLoggedIn: false,
    errors: [],
    oldInput: { name: '', email: '', password: '', userType: '' }
  });
}

exports.postSignup = [
  // Full Name Validation
  check('name')
    .notEmpty()
    .withMessage('Full Name is required')
    .trim()
    .isLength({ min: 3 })
    .withMessage('Full Name must be at least 3 characters long')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Full Name must only contain letters and spaces'),
  
  // Email Validation
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .trim()
    .isEmail()
    .withMessage('Invalid Email Address'),
  
  // Password Validation
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number'),
    
  // Confirm Password Validation
  check('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),

    // User Type Validation
    check('userType')
    .notEmpty()
    .withMessage('Please select a user type')
    .isIn(['guest', 'host'])
    .withMessage('Invalid User Type'),

    // Terms and Conditions Validation
    check('termsAccepted')
    .notEmpty()
    .withMessage('Please accept the Terms and Conditions')
    .custom((value, { req }) => {
      if (value !== 'on') {
        throw new Error('Please accept the Terms and Conditions');
      }
      return true;
    }),
  
  (req, res, next) => {
  console.log("Signup request received", req.body);
  const { name, email, password, userType } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("Signup failed!", errors.array());
    return res.status(422).render('./auth/signup', {
      pageTitle: 'Signup',
      currPage: 'signup',
      isLoggedIn: false,
      errors: errors.array().map(error => error.msg),
      oldInput: { name, email, password, userType }
    });
  }
  
  console.log("Signup successful!");
  res.redirect("/login");
}];

// Why 404 when postSignup, even It's already added in the router?
// Ans: B
