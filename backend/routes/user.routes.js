const express = require("express");
const router = express.Router();

// User Controller
const {
  menuBarProvider
} = require("../controllers/user.controller.js"); // Controller of passport routes

router.get("/menu", menuBarProvider);

module.exports = router;