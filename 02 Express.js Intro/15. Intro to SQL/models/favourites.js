// --- Data management --- //

// Core Modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil');
const favouritesDataPath = path.join(rootDir, 'data', 'favourites.json');

module.exports = class Favourite {

  static addToFavourite(homeId, callback) {
    Favourite.getFavourites(favourites => {
      if (favourites.includes(homeId)) {
        callback("Home is already added to Favourite");
      } else {
        favourites.push(homeId);
        console.log(`Id ${homeId} added to Favourite`);
        fs.writeFile(favouritesDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouritesDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static deleteById(delHomeId, callback) {
    Favourite.getFavourites(homeIds => {
      homeIds = homeIds.filter(homeId => delHomeId !== homeId);
      fs.writeFile(favouritesDataPath, JSON.stringify(homeIds), callback);
    });
  }
};