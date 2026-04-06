// --- Data management --- //

// Core Modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const Favourite = require('./favourites');
const { error } = require('console');
const homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
  constructor(houseName, price, locationName, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.locationName = locationName;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  // This saves the object to the in-memory array.
  save() {
    Home.getAllHomes(registeredHomes => {
      if (this.id) {
        // update home
        registeredHomes = registeredHomes.map(home =>
          home.id === this.id ? this : home);

      } else {
        // add new home
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        // console.log("File write happened:", error);
      });
    });
  }

  // only for class, not for instances (objects).
  static getAllHomes(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      // console.log("File read result:", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.getAllHomes(homes => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    this.getAllHomes(homes => {
      homes = homes.filter(home => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
        Favourite.deleteById(homeId, callback);
      });
    });
  }
};