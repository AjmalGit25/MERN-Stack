// --- Data management for New Users --- //

// Local Modules

// External Modules
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  userType: {
    type: String,
    required: true,
    enum: ['guest', 'host'],
    default: 'guest'
  }
});

module.exports = mongoose.model('User', userSchema);