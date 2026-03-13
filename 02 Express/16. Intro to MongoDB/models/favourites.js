// --- Data management --- //

// Core Modules
const { getDb } = require('../utils/databaseUtil');
const { ObjectId } = require('mongodb');

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getDb();
    // Check if home is already added to Favourite
    return db.collection('favourites').findOne({ homeId: this.homeId }).then(existingFav => {
      if (!existingFav) {
        return db.collection('favourites').insertOne(this);
      }
      // return "Home is already added to Favourite";
      return Promise.reject("Home is already added to Favourite");
    });
  }

  static getFavourites() {
    const db = getDb();
    return db.collection('favourites').find({}).toArray();
  }

  static deleteById(delHomeId) {
    const db = getDb();
    return db.collection('favourites').deleteOne({ homeId: delHomeId });
  }
};