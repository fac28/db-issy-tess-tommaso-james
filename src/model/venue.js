const db = require("../database/db.js");

/* function createVenue(content) {
  console.log("In createVenue: ", content);
  return insert_venue.run(content);
} */

// CREATE LOCATION
const insert_location = db.prepare(/*sql*/ `
  INSERT INTO location (name, street, postcode)
  VALUES ($borough, $address, $postcode)
  RETURNING id AS location_id
`);

function createLocation(content) {
  return insert_location.get(content);
}

// CREATE VENUE
const insert_venue = db.prepare(/*sql*/ `
  INSERT INTO venue (name , location_id) 
  VALUES ($venueName, $location_id)
  RETURNING id AS venue_id
`);

function createVenue(content) {
  return insert_venue.get(content);
}

const insert_cuisine = db.prepare(/*sql*/ `
  INSERT INTO cuisine (name)
  VALUES ($cuisine)
`);

function createCuisine(content) {
  return insert_cuisine.run(content);
}
// console.log(db);
// createVenue(content);
// console.log(createVenue(content));
module.exports = { createVenue, createLocation };

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
