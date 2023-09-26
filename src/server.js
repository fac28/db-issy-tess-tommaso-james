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
  const message = req.body.message;
  const errors = {};
  if (!venueName) {
    errors.venueName = "Please enter your venueName";
  }
  if (!message) {
    errors.message = "Please enter a message";
  }
  if (Object.keys(errors).length) {
    const body = formPage(submittedData, errors, req.body);
    res.status(400).send(body);
  } else {
    const created = Date.now();
    submittedData.push({ venueName: venueName, message, created });
    res.redirect("/");
  }
});

module.exports = server;
