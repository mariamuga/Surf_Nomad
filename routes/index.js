const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("home");
});

// this is a trial following the video

module.exports = router;
