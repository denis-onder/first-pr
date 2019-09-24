// Load dotenv
require("dotenv").config();

module.exports = {
  mongoURI: process.env.DB_URI,
  secretOrKey: process.env.SECRET || "secret",
  environment: process.env.NODE_ENV || "development"
};
