const express = require("express");
const { formPage, homePage } = require("./templates.js");
const model = require("./model/venue.js");

const { listVenueInfo } = require("./model/displayAll.js")

const server = express();
server.use(express.static("public"));

const submittedData = [];

server.get("/", (req, res) => {
  const body = homePage(listVenueInfo());
  res.send(body);
});

server.get("/submit", (req, res) => {
  const body = formPage(submittedData);
  res.send(body);
});

server.post("/submit", express.urlencoded({ extended: false }), (req, res) => {
  const { venueName, address, borough, postcode, cuisine } = req.body;
  const errors = {};
  if (!venueName) {
    errors.venueName = "Please enter the name of the venue";
  }
  if (!address) {
    errors.address = "Please enter a address";
  }
  if (!borough) {
    errors.borough = "Please enter the name of borough";
  }
  if (!postcode) {
    errors.postcode = "Please enter a postcode";
  }
  if (!cuisine) {
    errors.cuisine = "Please enter what type of food it's served";
  }
  if (Object.keys(errors).length) {
    const body = formPage(submittedData, errors, req.body);
    res.status(400).send(body);
  } else {
    const { location_id } = model.createLocation({
      venueName,
      address,
      borough,
      postcode,
    });

    const { venue_id } = model.createVenue({ venueName, location_id });

    const { cuisine_id } = model.createCuisine(cuisine);

    model.linkVenueAndCuisine(venue_id, cuisine_id);

    res.redirect("/");
  }
});

module.exports = server;
