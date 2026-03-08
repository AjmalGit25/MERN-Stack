// Local Modules
const User = require('../models/user');

// External Modules
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {
  res.render('./auth/login', {
    pageTitle: 'Login',
    currPage: 'login',
    isLoggedIn: false,
    errors: [],
    oldInput: { email: '' },
    user: {}
  });
}

exports.getSignup = (req, res, next) => {
  res.render('./auth/signup', {
    pageTitle: 'Signup',
    currPage: 'signup',
    isLoggedIn: false,
    errors: [],
    oldInput: { firstName: '', lastName: '', email: '', userType: '' },
    user: {}
  });
}

exports.postSignup = [
  // First Name Validation
  check('firstName')
    .notEmpty()
    .withMessage('First Name is required')
    .trim()
    .isLength({ min: 2 })
    .withMessage('First Name must be at least 2 characters long')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('First Name must only contain letters and spaces'),
  // Last Name Validation
  check('lastName')
    .matches(/^[a-zA-Z\s]*$/)
    .withMessage('Last Name must only contain letters and spaces'),

  // Email Validation
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .trim()
    .isEmail()
    .withMessage('Invalid Email Address')
    .normalizeEmail(),

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
    .withMessage('Password must contain at least one number')
    .matches(/[!@&]/)
    .withMessage("Password should contain atleast one special character")
    .trim(),

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
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {      // Errors on validation
      console.log("Signup failed!", errors.array());
      return res.status(422).render('./auth/signup', {
        pageTitle: 'Signup',
        currPage: 'signup',
        isLoggedIn: false,
        errors: errors.array().map(err => err.msg),
        oldInput: { firstName, lastName, email, password, userType },
        user: {}
      });
    }

    bcrypt.hash(password, 12)
      .then((hashedPassword) => {
        const user = new User({ firstName, lastName, email, password: hashedPassword, userType });
        return user.save(); // Save user to database
      })
      .then(() => {
        console.log("User created!");
        res.redirect("/login");

      }).catch(err => {
        console.log("Error while creating user!", err);

        return res.status(422).render('./auth/signup', {
          pageTitle: 'Signup',
          currPage: 'signup',
          isLoggedIn: false,
          errors: [err.message],
          oldInput: { firstName, lastName, email, password, userType },
          user: {}
        });
      });
  }
];

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("Login request received", req.body);

  const user = await User.findOne({ email });

  if (!user) {
    console.log("User not found!");
    return res.status(422).render('./auth/login', {
      pageTitle: 'Login',
      currPage: 'login',
      isLoggedIn: false,
      errors: ['Invalid email or password'],
      oldInput: { email },
      user: {}
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    console.log("Invalid password!");
    return res.status(422).render('./auth/login', {
      pageTitle: 'Login',
      currPage: 'login',
      isLoggedIn: false,
      errors: ['Invalid email or password'],
      oldInput: { email },
      user: {}
    });
  }

  console.log("Login successful!");

  req.session.isLoggedIn = true;
  req.session.user = user;
  await req.session.save();

  res.redirect("/homes");
}

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {    // Deletes the current user's session
    console.log("Error while destroying session!", err);
  });
  res.redirect("/login");
}