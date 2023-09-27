const test = require("node:test");
const assert = require("node:assert");
const { listVenues, listLocations, listVenueInfo, listVenueCuisines } = require("../src/model/displayAll.js");
const { resetDatabase } = require("../src/database/reset.js");



test("can list all venues", () => {
    resetDatabase();
    const venues = listVenues();
    const expected = [
    { name: "Babans naans" },
    { name: "Yard Sale" },
    { name: "Eddies" },
    { name: "Osteria Tufo" },
    { name: "Pizzaria Pappagone"}
  ];
  assert.deepEqual(venues, expected);
});

test("can list all locations", () => {
    resetDatabase();
    const locations = listLocations();
    const expected =  [
        {
          name: 'Finsbury Park',
          postcode: 'N8',
          street: 'Blackstock Road'
        },
        {
          name: 'Finsbury Park',
          postcode: 'N8',
          street: 'Fonthill Road'
        },
        {
          name: 'Finsbury Park',
          postcode: 'N8',
          street: 'Stroud Green Road'
        },
        {
          name: 'Finsbury Park',
          postcode: 'N8',
          street: 'Another Road'
        }
      ];
  assert.deepEqual(locations, expected);
});

test("can list all venues with their locations", () => {
    resetDatabase();
    const locations = listVenueInfo();
    const expected =  [
        {
          name: 'Babans naans',
          street: 'Blackstock Road'
        },
        {
          name: 'Yard Sale',
          street: 'Blackstock Road'
        },
        {
          name: 'Eddies',
          street: 'Stroud Green Road'
        },
        {
          name: 'Osteria Tufo',
          street: 'Fonthill Road'
        },
        {
          name: 'Pizzaria Pappagone',
          street: 'Stroud Green Road'
        }
      ];
  assert.deepEqual(locations, expected);
});

test("can list all venues with their cuisines", () => {
    resetDatabase();
    const locations = listVenueCuisines();
    const expected =  [
        {
          cuisine_name: 'Kurdish',
          venue_name: 'Babans naans'
        },
        {
          cuisine_name: 'Bread?',
          venue_name: 'Babans naans'
        },
        {
          cuisine_name: 'Pizza',
          venue_name: 'Yard Sale'
        },
        {
          cuisine_name: 'Turkish',
          venue_name: 'Eddies'
        },
        {
          cuisine_name: 'Bread?',
          venue_name: 'Eddies'
        },
        {
          cuisine_name: 'Italian',
          venue_name: 'Osteria Tufo'
        },
        {
          cuisine_name: 'Pizza',
          venue_name: 'Pizzaria Pappagone'
        },
        {
          cuisine_name: 'Italian',
          venue_name: 'Pizzaria Pappagone'
        },
    ];
  assert.deepEqual(locations, expected);
});