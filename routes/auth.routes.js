const express = require("express");
const router = express.Router();

const passport = require("passport");

const User = require("../models/User.model");

const bcrypt = require("bcrypt");
const bcryptSalt = 10;

const ensureLogin = require("connect-ensure-login");

router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("auth/private", { user: req.user });
});

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  if (password.length < 8) {
    res.render("auth/signup", {
      message: "Your password must be 8 characters minimun.",
    });
    return;
  }
  if (username === "") {
    res.render("auth/signup", { message: "Your username cannot be empty" });
    return;
  }
  User.findOne({ username: username }).then((found) => {
    if (found !== null) {
      res.render("auth/signup", { message: "This username is already taken" });
    } else {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync(password, salt);

      User.create({ username: username, password: hash, email: email })
        .then((dbUser) => {
          req.login(dbUser, (err) => {
            if (err) {
              next(err);
            } else {
              res.redirect("/");
            }
          });
        })
        .catch((err) => {
          next(err);
        });
    }
  });
});

//Login with Gmail 

// routes/auth-routes.js

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/private-page",
    failureRedirect: "/" // here you would redirect to the login page using traditional login approach
  })
);




router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    // here you can add your own routes
    successRedirect: "/private-page",
    failureRedirect: "/login",
    // this is set
    failureFlash: true,
    passReqToCallback: true,
  })
);
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
