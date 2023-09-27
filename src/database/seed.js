const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const db = require("./db.js");

const seedPath = join("src","database", "seed.sql");
const seed = readFileSync(seedPath, "utf-8");

function seedDb() {
    db.exec(seed);
}

seedDb();
console.log("DB seeded with example data");

module.exports = seedDb;