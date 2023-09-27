const db = require("../database/db.js");

const select_venues = db.prepare(/*sql*/ `
  SELECT
    name
  FROM venue
`);

function listVenues() {
    return select_venues.all();
}

const select_locations = db.prepare(/*sql*/ `
  SELECT
    name,
    street,
    postcode
  FROM location
`);

function listLocations() {
    return select_locations.all();
}


const select_venue_info = db.prepare(/*sql*/ `
  SELECT
    venue.name,
    location.street
  FROM venue
  JOIN location ON venue.location_id = location.id
`);

function listVenueInfo() {
    return select_venue_info.all();
}

const select_venue_cuisines = db.prepare(/*sql*/ `
    SELECT
        venue.name AS venue_name,
        cuisine.name AS cuisine_name
    FROM venue
    JOIN venue_cuisine ON venue.id = venue_cuisine.venue_id
    JOIN cuisine ON venue_cuisine.cuisine_id = cuisine.id
`);

function listVenueCuisines() {
    return select_venue_cuisines.all();
}


/*console.log(listVenueCuisines())*/


module.exports = { listVenues, listLocations, listVenueInfo, listVenueCuisines };
