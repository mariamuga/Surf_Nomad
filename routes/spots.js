const express = require("express");
const Spot = require("../models/Spot");

const router = express.Router();

router.get("/", (req, res) => {
  let whatToSearchFor;

  if (req.query.breaktypes === "All Types" || (!req.query.breaktypes && !req.query.seabed)) {
    whatToSearchFor = {};
  } else if (req.query.seabed && req.query.breaktypes) {
    whatToSearchFor = { type: req.query.breaktypes, seabed: req.query.seabed };
  } else if (req.query.seabed) {
    whatToSearchFor = { seabed: req.query.seabed };
  } else {
    whatToSearchFor = { type: req.query.breaktypes };
  }

  Spot.find(whatToSearchFor)
    .then((allSpots) => {
      // console.log("allSpots: ", allSpots);
      const count = allSpots.length;
      res.render("auth/explore", { spots: allSpots, count });
    })
    .catch((error) => console.log("Error while getting spots from DB: ", error));
});

router.get("/:name", (req, res) => {
  console.log(req.params);
  // res.send(req.params);
  Spot.find({}).then((allSpots) => {
    const spotDetail = allSpots.find((Spot) => Spot.name === req.params.name);
    res.render("auth/spotDetail", { spot: spotDetail });
    // res.render("auth/spotDetail", { spot: spotDetail, layout: false });
  });
});

module.exports = router;
