const seedDb = require("./seed.js");
const db = require("./db.js");


const clear_venues = db.prepare("DELETE FROM venue;");
const clear_cuisine = db.prepare("DELETE FROM cuisine;");
const clear_location = db.prepare("DELETE FROM location;");
const clear_venue_cuisine = db.prepare("DELETE FROM venue_cuisine;");

function clearDb() {
    clear_venue_cuisine.run(); // Clear the venue_cuisine table
    clear_venues.run(); // Clear the venue table
    clear_cuisine.run(); // Clear the cuisine table
    clear_location.run(); // Clear the location table
}


function resetDatabase() {
    clearDb();
    seedDb();       // Seed the database
}
clearDb();
module.exports = { resetDatabase, clearDb };