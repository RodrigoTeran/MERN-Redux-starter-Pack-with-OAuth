// NPM modules
const express = require("express");  // Node framework
const cors = require("cors"); // For connecting to client url
const morgan = require("morgan"); // To see important details in the terminal (Dev)
const passport = require("passport"); // For authentication
const cookieSession = require("cookie-session"); // To control user session

// Initializations
const app = express();

// ------------- Settings -------------
// PORT
app.set("port", process.env.PORT || 5000);

// ------------- Middlewares -------------
// CORS
if (process.env.NODE_ENV == "development") {
  app.use(cors({
    origin: `${process.env.CLIENT_URL}`
  }));
};
// Cookie Session
app.use(cookieSession({ // Configurated for only 1 day long
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));
// Morgan
app.use(morgan("dev"));
// Passport
app.use(passport.initialize());
app.use(passport.session());

// ------------- Routes -------------
app.use(require("./routes/user.routes"));  // User related routes
app.use("/auth", require("./routes/passport.routes"));  // Passport related routes

module.exports = app;