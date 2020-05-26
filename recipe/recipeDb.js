// Bring in the db-config file
const db = require("../data/db-config");

// Module exports
module.exports = {
  getRecipes,
};

// Function to get all recipes in the db
function getRecipes() {
  return db("recipe");
}
