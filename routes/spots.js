const express = require("express");
const Spot = require("../models/Spot");

const router = express.Router();

router.get("/", (req, res) => {
  Spot.find()
    .then((allSpots) => {
      // console.log("allSpots: ", allSpots);
      const count = allSpots.length;
      res.render("overview", { spots: allSpots, count });
    })
    .catch((error) => console.log("Error while getting spots from DB: ", error));
});

module.exports = router;
