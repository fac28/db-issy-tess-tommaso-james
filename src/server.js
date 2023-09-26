const express = require("express");
const { formPage, homePage } = require("./templates.js");

const server = express();

const submittedData = [];

server.get("/", (req, res) => {
  const body = homePage(submittedData);
  res.send(body);
});

server.get("/submit", (req, res) => {
  const body = formPage(submittedData);
  res.send(body);
});

server.post("/submit", express.urlencoded({ extended: false }), (req, res) => {
  const venueName = req.body.venueName;
  const address = req.body.address;
  const borough = req.body.borough;
  const postcode = req.body.postcode;
  const cuisine = req.body.cuisine;
  const errors = {};
  console.log(req.body);
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
    errors.cuisine = "Please enter what type of food its served";
  }
  if (Object.keys(errors).length) {
    const body = formPage(submittedData, errors, req.body);
    res.status(400).send(body);
  } else {
    submittedData.push({ venueName, address, borough, postcode, cuisine });
    res.redirect("/");
  }
});

module.exports = server;
