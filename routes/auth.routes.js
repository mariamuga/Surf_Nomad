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
  const { username, password } = req.body;

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

      User.create({ username: username, password: hash })
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
