// --- Data management --- //

// Core Modules
const path = require('path');
const rootDir = require('../utils/pathUtil');
const Favourite = require('./favourites');
const { getDb } = require('../utils/databaseUtil');
const { ObjectId } = require('mongodb');

module.exports = class Home {
  constructor(houseName, price, locationName, rating, photoUrl, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.locationName = locationName;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    if (_id) {
      this._id = _id;
    }
  }

  save() {
    const db = getDb();
    if (this._id) {  // update
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        locationName: this.locationName,
        rating: this.rating,
        photoUrl: this.photoUrl,
        description: this.description
      };

      return db.collection('homes').updateOne({ _id: new ObjectId(String(this._id)) }, { $set: updateFields });
    }
    // insert
    return db.collection('homes').insertOne(this);
  }

  static getAllHomes() {
    const db = getDb();
    return db.collection('homes').find({}).toArray();
  }

  static findById(homeId) {
    const db = getDb();
    return db.collection('homes').find({ _id: new ObjectId(String(homeId)) }).next();
  }

  static deleteById(homeId, callback) {
    const db = getDb();
    return db.collection('homes').deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};