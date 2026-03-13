// --- Data management --- //

// Local Modules
const db = require('../utils/databaseUtil');

module.exports = class Home {
  constructor(houseName, price, locationName, rating, photoUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.locationName = locationName;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  save() {
    if (this.id) {        // Update home
      return db.execute(
        `UPDATE homes SET houseName = ?, price = ?, locationName = ?, rating = ?, photoUrl = ?, description = ? WHERE id = ?`,
        [this.houseName, this.price, this.locationName, this.rating, this.photoUrl, this.description, this.id]
      );
    }
    // SQL Injection Safe
    return db.execute(    // Insert new home
      `INSERT INTO homes (houseName, price, locationName, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)`,
      [this.houseName, this.price, this.locationName, this.rating, this.photoUrl, this.description]
    );
  }

  static getAllHomes() {
    return db.execute('SELECT * FROM homes');
  }

  static findById(homeId) {
    return db.execute('SELECT * FROM homes WHERE id = ?', [homeId]);
  }

  static deleteById(homeId) {
    return db.execute('DELETE FROM homes WHERE id = ?', [homeId]);
  }
};