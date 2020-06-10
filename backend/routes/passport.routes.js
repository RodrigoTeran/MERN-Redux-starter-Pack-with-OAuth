// NPM modules
const express = require("express"); // Node framework
const passport = require("passport"); // For authentication
const router = express.Router();  // Router method
const {
  facebook,
  facebookCallBack,
  google,
  googleCallBack,
  logout
} = require("../controllers/passport.controller.js"); // Controller of passport routes

// ------------- Routes -------------
// Facebook
router.get("/facebook", facebook);
router.get("/facebook/callback", passport.authenticate("facebook"), facebookCallBack);

// Google
router.get("/google", google);
router.get("/google/callback", passport.authenticate("google"), googleCallBack);

// Logout
router.get("/logout", logout);

module.exports = router;
