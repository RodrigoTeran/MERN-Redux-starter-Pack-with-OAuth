// ------------- Imports -------------
require("dotenv").config(); // For .env
require("./database");  // Database

// Passport Strategies
require("./authentication/index.js");

// App
const app = require('./server');

// Server is listening
app.listen(app.get("port"), () => {
  console.log('Server on port:', app.get("port"));
  console.log('Environment:', process.env.NODE_ENV);
});
