// Bring in the db-config file
const db = require("../data/db-config");

// Module exports
module.exports = {
  getRecipes,
  getShoppingList,
};

// Function to get all recipes in the db
function getRecipes() {
  return db("recipe");
}

function getShoppingList(recipe_id) {
  // select ingredient_name, quantity from ingredient join recipe_ingredient on ingredient.id = recipe_ingredient.id where recipe_id =2
  return db
    .select("ingredient.ingredient_name", "recipe_ingredient.quantity")
    .from("ingredient")
    .join("recipe_ingredient", "ingredient.id", "recipe_ingredient.id")
    .where({ recipe_id });
}
