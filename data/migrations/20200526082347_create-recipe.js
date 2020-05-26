exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments();
      tbl.text("name").notNullable();
    })
    .createTable("ingredient", (tbl) => {
      tbl.increments();
      tbl.text("ingredient_name").notNullable();
    })
    .createTable("recipe_ingredient", (tbl) => {
      tbl.increments();
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredient");
      tbl.text("quantity").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe");
    });
};

exports.down = function (knex) {
  // Undo the up function
  return knex.schema
    .dropTableIfExists("ingredient")
    .dropTableIfExists("recipe")
    .dropTableIfExists("recipe_ingredient");
};
