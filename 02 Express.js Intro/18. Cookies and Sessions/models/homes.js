// --- Data management --- //

// Local Modules
const Favourite = require('./favourites');

// External Modules
const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
  houseName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  locationName: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  photoUrl: String,
  description: String,
});

homeSchema.pre('findByIdAndDelete', async function(next) {
  const homeId = this.getQuery()._id;
  console.log("Pre hook called before deleting home!");
  await Favourite.deleteMany({ homeId: homeId });
  next();
});

module.exports = mongoose.model('Home', homeSchema);