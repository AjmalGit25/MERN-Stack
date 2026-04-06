// External Modules
const mongo = require('mongodb');       // Import mongodb module

const MongoClient = mongo.MongoClient;  // Create MongoClient object

// Connection URL for MongoDB Atlas
const MONGO_URL = "mongodb+srv://zoya:root@daliustech.nr4dmbg.mongodb.net/?appName=DaliusTech";

let _db;                                // Private variable to store the database connection

// Connect to MongoDB Atlas
const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL).then((client) => {
    callback();
    _db = client.db('airbnb');          // If connection is successful, then return client
    console.log("Successfully connected to MongoDB");
  }).catch((err) => {
    console.log("Error while connecting to MongoDB: ", err);
  });
}

const getDb = () => {
  if (!_db)
    throw "No database found!";            // If connection is not successful, then throw error
  return _db;
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;