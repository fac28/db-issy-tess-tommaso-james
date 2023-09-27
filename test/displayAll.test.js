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
        address: 'Blackstock Road',
        borough: 'Finsbury Park',
        cuisines: 'Kurdish, Bread?',
        postcode: 'N8',
        venueName: 'Babans naans'
      },
      {
        address: 'Blackstock Road',
        borough: 'Finsbury Park',
        cuisines: 'Pizza',
        postcode: 'N8',
        venueName: 'Yard Sale'
      },
      {
        address: 'Stroud Green Road',
        borough: 'Finsbury Park',
        cuisines: 'Turkish, Bread?',
        postcode: 'N8',
        venueName: 'Eddies'
      },
      {
        address: 'Fonthill Road',
        borough: 'Finsbury Park',
        cuisines: 'Italian',
        postcode: 'N8',
        venueName: 'Osteria Tufo',
      },
      {
        address: 'Stroud Green Road',
        borough: 'Finsbury Park',
        cuisines: 'Pizza, Italian',
        postcode: 'N8',
        venueName: 'Pizzaria Pappagone',
      }
    ];
  assert.deepEqual(locations, expected);
});

test("can list all venues with their cuisines", () => {
    resetDatabase();
    const locations = listVenueCuisines();
    const expected =  [
      {
        cuisine_names: 'Kurdish, Bread?',
        venue_name: 'Babans naans'
      },
      {
        cuisine_names: 'Turkish, Bread?',
        venue_name: 'Eddies'
      },
      {
        cuisine_names: 'Italian',
        venue_name: 'Osteria Tufo'
      },
      {
        cuisine_names: 'Pizza, Italian',
        venue_name: 'Pizzaria Pappagone'
      },
      {
        cuisine_names: 'Pizza',
        venue_name: 'Yard Sale'
      }
    ];
  assert.deepEqual(locations, expected);
});