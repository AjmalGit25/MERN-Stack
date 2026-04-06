const mysql = require('mysql2');  // Import mysql2 module

const pool = mysql.createPool({   // Create a MySQL connection pool
  host: 'localhost',              // Host name
  user: 'root',                   // User name
  password: '7654',                 // Password
  database: 'airbnb'              // Database name
});  

module.exports = pool.promise();  // Export the connection pool