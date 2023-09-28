const seedDb = require("./seed.js");
const db = require("./db.js");


function clearDb() {
    db.exec(/*sql*/ `
        DELETE FROM venue_cuisine;
        DELETE FROM sqlite_sequence WHERE name='venue_cuisine';
    `);
    db.exec(/*sql*/ `
        DELETE FROM venue;
        DELETE FROM sqlite_sequence WHERE name='venue';
    `);
    db.exec(/*sql*/ `
    DELETE FROM cuisine;
    DELETE FROM sqlite_sequence WHERE name='cuisine';
    `);
    db.exec(/*sql*/ `
        DELETE FROM location;
        DELETE FROM sqlite_sequence WHERE name='location';
    `);
}


function resetDatabase() {
    clearDb();
    seedDb();       // Seed the database
}
clearDb();
module.exports = { resetDatabase, clearDb };