const test = require("node:test");
const assert = require("node:assert");
const { createLocation, createVenue, createCuisine } = require("../src/model/venue.js");
const resetDatabase = require("../src/database/reset.js");

const sampleObject = { venueName: "Space4", address: "Fonthill Road", borough: "Finsbury Park", postcode: "N8", cuisine: "Stress" };

/* test("can insert new locations", () => {
    resetDatabase;
    const location = createLocation(sampleObject);
    const expected = [];
  assert.deepEqual(location, expected);
}); */
/* 
test("can insert new venues", () => {
    resetDatabase;
    const venue = createVenue(sampleObject);
    const expected = [];
  assert.deepEqual(venue, expected);
});

test("can insert new cuisines", () => {
    resetDatabase;
    const cuisine = createCuisine(sampleObject);
    const expected = [];
  assert.deepEqual(cuisine, expected);
});
 */