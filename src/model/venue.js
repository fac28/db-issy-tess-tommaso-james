const db = require("../database/db.js");

const insert_venue = db.prepare(
  /*sql*/ `INSERT INTO venue (venueName, address, borough, postcode, ) VALUES (?, ?, ?, ?)`
);
const content = ["pappagone", "stret", "stret", "stret"];

function createVenue(content) {
  return insert_venue.run(content);
}

createVenue(content);
console.log(createVenue(content));
module.exports = { createVenue };

// { venueName, address, borough, postcode, cuisine }  object we recieve from form
/* Table layout

 location table
 id (key) - name - street - postcode

venue table
id (key) - name - location_id

cuisine table
id (key) - name

venue_cuisine
venue_id (key) - cuisine_id (key)

*/
