/** Database setup for users. */

const { Client } = require("pg");

let DB_URI;

if (process.env.NODE_ENV === "test") {
  // This is for testing purposes
  DB_URI = "postgresql://postgres:2002@127.0.0.1:5432/usersdb_test";
} else {
  DB_URI = "postgresql://postgres:2002@127.0.0.1:5432/usersdb";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to the database');
  }
});

module.exports = db;
