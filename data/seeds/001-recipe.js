exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe").insert([
        { id: 1, name: "Make spaghetti" },
        { id: 2, name: "Cook yam" },
        { id: 3, name: "Make cheese" },
      ]);
    });
};
