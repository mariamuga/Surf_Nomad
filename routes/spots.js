const express = require("express");
const Spot = require("../models/Spot");

const router = express.Router();

router.get("/", (req, res) => {
  Spot.find({ type: req.query.breaktypes /* seabed: req.query.seabed */ })
    .then((allSpots) => {
      // console.log("allSpots: ", allSpots);
      const count = allSpots.length;
      res.render("auth/explore", { spots: allSpots, count });
    })
    .catch((error) => console.log("Error while getting spots from DB: ", error));
});

module.exports = router;
