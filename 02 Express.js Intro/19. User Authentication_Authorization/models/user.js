const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  userType: {
    type: String,
    enum: ['guest', 'admin'],
    default: 'guest'
  }
});

module.exports = mongoose.model('User', userSchema);