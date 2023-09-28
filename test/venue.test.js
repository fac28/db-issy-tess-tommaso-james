const test = require("node:test");
const assert = require("node:assert");
const { createLocation, createVenue, createCuisine } = require("../src/model/venue.js");
const db = require("../src/database/db.js")
const { resetDatabase } = require("../src/database/reset.js");

const sampleObject = { 
  venueName: "Space4", 
  address: "Fonthill Road", 
  borough: "Finsbury Park", 
  postcode: "N8000", 
  cuisine: "Stress",
  location_id: 3,
  venue_id: 6
};

test("can insert new locations", async () => {
  const { location_id } = createLocation(sampleObject);
  const actual = db.prepare(/*sql*/ `
  SELECT name, street, postcode
  FROM location
  WHERE id = $location_id
  `).get({ location_id });
  const expected = {
    name: 'Finsbury Park',
    postcode: 'N8000',
    street: 'Fonthill Road'
  };
  assert.deepEqual(actual, expected);
  await resetDatabase();
});

test("can insert new venues", async () => {
  const { venue_id } = createVenue(sampleObject);
  const actual = db.prepare(/*sql*/ `
  SELECT name, location_id
  FROM venue
  WHERE id = $venue_id
  `).get({ venue_id });
  const expected = {
    location_id: 3,
    name: 'Space4'
  };
assert.deepEqual(actual, expected);
await resetDatabase();
});

test("can insert new cuisines", async () => {
  const { cuisine_id } = createCuisine(sampleObject.cuisine);
  const actual = db.prepare(/*sql*/ `
  SELECT name
  FROM cuisine
  WHERE id = $cuisine_id
  `).get({ cuisine_id });
  const expected = {
    name: 'Stress'
  };
assert.deepEqual(actual, expected);
await resetDatabase();
});