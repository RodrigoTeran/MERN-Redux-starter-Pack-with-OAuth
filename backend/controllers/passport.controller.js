// NPM modules
const passport = require("passport"); // For authentication

const passportCtrl = {};  // Our object that contains all methods

// Facebook
passportCtrl.facebook = passport.authenticate("facebook");
passportCtrl.facebookCallBack = (req, res) => {
  res.redirect("/profile");
};

// Google
passportCtrl.google = passport.authenticate("google", {
  scope: ["profile", "email"]
});
passportCtrl.googleCallBack = (req, res) => {
  res.redirect("/profile");
};

// Logout
passportCtrl.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

module.exports = passportCtrl;