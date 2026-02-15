// Core Modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const { error } = require('console');

module.exports = class Home {
  constructor(houseName, price, locationName, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = locationName;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  // This saves the object to the in-memory array.
  save() {
    Home.getAllHomes(registeredHomes => {   // registeredHomes is defined in getAllHomes callback, no need to define it here
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File write happened:", error);
      });
    });
  }
  
  static getAllHomes(callback) {            // registeredHomes is defined in the callback of fs.readFile, no need to define it here
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(homeDataPath, (err, data) => {
      console.log("File read result:", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
};