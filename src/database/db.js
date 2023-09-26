const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const Database = require("better-sqlite3");

const db = new Database(process.env.DB_FILE);

const schemaPath = join("database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

module.exports = db;

// const { readFileSync } = require('node:fs');
// const { join } = require('node:path');
// const sqlite3 = require('sqlite3').verbose();

// // Specify the path to the SQLite database file relative to the /data directory
// const dbPath = '/data/myapp.db'; // Change 'myapp.db' to your desired database name

// // Open a connection to the database
// const db = new sqlite3.Database(dbPath);

// const schemaPath = join('src', 'database', 'schema.sql');
// const schema = readFileSync(schemaPath, 'utf-8');
// db.exec(schema);

// module.exports = db;
