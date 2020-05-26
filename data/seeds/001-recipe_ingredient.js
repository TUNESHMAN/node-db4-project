exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredient")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_ingredient").insert([
        { id: 1, ingredient_id: 3, quantity: "50 grams", recipe_id: 2 },
        { id: 2, ingredient_id: 1, quantity: "60kg", recipe_id: 2 },
        { id: 3, ingredient_id: 3, quantity: "3cm", recipe_id: 1 },
      ]);
    });
};
