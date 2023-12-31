const db = require("../database/db.js");

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

// CREATE CUISINE

const insert_cuisine = db.prepare(/*sql*/ `
  INSERT INTO cuisine (name)
  VALUES ($cuisine)
  RETURNING id AS cuisine_id
`);

function createCuisine(cuisine) {
  return insert_cuisine.get({ cuisine });
}

// CREATE VENUE-CUISINE

const insert_venue_cuisine = db.prepare(/*sql*/ `
  INSERT INTO venue_cuisine (venue_id, cuisine_id)
  VALUES ($venue_id, $cuisine_id)
`);

function linkVenueAndCuisine(venueId, cuisineId) {
  return insert_venue_cuisine.run({ venue_id: venueId, cuisine_id: cuisineId });
}

module.exports = {
  createVenue,
  createLocation,
  createCuisine,
  linkVenueAndCuisine,
};