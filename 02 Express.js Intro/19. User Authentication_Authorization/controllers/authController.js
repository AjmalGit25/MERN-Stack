const { check, validationResult } = require('express-validator');
const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('./auth/login', {
    pageTitle: 'Login',
    currPage: 'login',
    isLoggedIn: false
  });
}

exports.getSignup = (req, res, next) => {
  res.render('./auth/signup', {
    pageTitle: 'Sign Up',
    currPage: 'signup',
    isLoggedIn: false,
    errors: [],
    oldInput: {}
  });
}

exports.postLogin = (req, res, next) => {
  console.log("Login request received", req.body);
  req.session.isLoggedIn = true;
  res.redirect("/homes");
}

exports.postLogout = (req, res, next) => {
  console.log("Logout request received", req.body);
  req.session.destroy((err) => {
    console.log("Error while destroying session!", err);
  });
  res.redirect("/");
}

exports.postSignup = [
  // First Name
  check('firstName')
    .notEmpty()
    .withMessage('First Name is required')
    .trim()
    .isLength({ min: 2 })
    .withMessage('First Name must be at least 2 characters long')
    .matches(/^[A-Za-z]+$/)
    .withMessage('First Name must contain only letters'),

  // Last Name
  check('lastName')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Last Name must be at least 2 characters long')
    .matches(/^[A-Za-z]+$/)
    .withMessage('Last Name must contain only letters'),

  // Email
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .trim()
    .isEmail()
    .withMessage('Invalid Email Address')
    .normalizeEmail(),

  // Password
  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .trim()
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),

  // Confirm Password
  check('confirmPassword')
    .notEmpty()
    .withMessage('Confirm Password is required')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),

    // User Type
    check('userType')
    .notEmpty()
    .withMessage('User Type is required')
    .isIn(['guest', 'admin'])
    .withMessage('Invalid User Type'),

    // Terms and Conditions
    check('terms')
    .notEmpty()
    .withMessage('You must accept the Terms and Conditions')
    .custom((value, { req }) => {
      if (value !== 'accepted') {
        throw new Error('You must accept the Terms and Conditions');
      }
      return true;
    }),

  (req, res, next) => {
    console.log("Signup request received", req.body);

    const {firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // console.log("Errors: ", errors.array());
      return res.render('./auth/signup', {
        pageTitle: 'Sign Up',
        currPage: 'signup',
        isLoggedIn: false,
        errors: errors.array().map((err) => err.msg),
        oldInput: { firstName, lastName, email, userType }
      });
    }

    const user = new User({ firstName, lastName, email, password, userType });
    user.save().then(() => {
      console.log("User added successfully!");
      res.redirect("/login");
    }).catch((err) => {
      console.log("Error while adding user!", err);
      return res.render('./auth/signup', {
        pageTitle: 'Sign Up',
        currPage: 'signup',
        isLoggedIn: false,
        errors: [err.message],
        oldInput: { firstName, lastName, email, userType }
      });
    });
  }
];