// This is the file that has knowledge of knex. It is where we bring in our configuration whether development or staging.
// It is also where we expose the db utility to the outer world.
const knex = require("knex");
const config = require("../knexfile");

const env = process.env.NODE._ENV || "development";

const configOptions = config[env];

// Export the configuration file
module.exports = knex(configOptions);
