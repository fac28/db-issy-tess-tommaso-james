const db = require("../database/db.js");

const insert_venue = db.prepare(/*sql*/ `INSERT INTO venue (name) VALUES (?)`);
const content = ["osteria da tommaso"];

function createVenue(content) {
  return insert_venue.run(content);
}

console.log(db);
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
