const db = require("../database/db.js");

const select_venues = db.prepare(/*sql*/ `
  SELECT
    name
  FROM venue
`);

function listVenues() {
    return select_venues.all();
}

console.log(listVenues())


// const select_venue_info = db.prepare(/*sql*/ `
//   SELECT
//     venue.name,
//     location,
    
    
//   FROM products
// `);

// function listVenueInfo() {
//     return select_venues.all();
// }

module.exports = { listVenues };
