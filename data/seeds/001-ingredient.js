exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredient")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredient").insert([
        { id: 1, ingredient_name: "Flour" },
        { id: 2, ingredient_name: "Sugar"},
        { id: 3, ingredient_name: "Oil"},
      ]);
    });
};
