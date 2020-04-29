const express = require("express");
const Spot = require("../models/Spot");

const router = express.Router();

router.get("/", (req, res) => {
  Spot.find()
    .then((allSpots) => {
      console.log("allSpots: ", allSpots);
      res.send(allSpots);
    })
    .catch((error) => console.log("Error while getting spots from DB: ", error));
});

module.exports = router;
