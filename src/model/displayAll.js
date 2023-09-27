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
        v.name AS venueName,
        l.street AS address,
        l.name AS borough,
        l.postcode AS postcode,
        GROUP_CONCAT(c.name, ', ') AS cuisines
    FROM venue AS v
    JOIN location AS l ON v.location_id = l.id
    LEFT JOIN venue_cuisine AS vc ON v.id = vc.venue_id
    LEFT JOIN cuisine AS c ON vc.cuisine_id = c.id
    GROUP BY v.id
`);

function listVenueInfo() {
    return select_venue_info.all();
}

const select_venue_cuisines = db.prepare(/*sql*/ `
    SELECT
        venue.name AS venue_name,
        GROUP_CONCAT(cuisine.name, ', ') AS cuisine_names
    FROM venue
    JOIN venue_cuisine ON venue.id = venue_cuisine.venue_id
    JOIN cuisine ON venue_cuisine.cuisine_id = cuisine.id
    GROUP BY venue.name
`);

function listVenueCuisines() {
    return select_venue_cuisines.all();
}


console.log(listVenueInfo())


module.exports = { listVenues, listLocations, listVenueInfo, listVenueCuisines };
