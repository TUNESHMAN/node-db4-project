exports.up = function (knex) {
  return knex.schema.createTable("recipe", (tbl) => {
    tbl.increments();
    tbl.text("name").notNullable();
  });
};

exports.down = function (knex) {
  // Undo the up function
  return knex.schema.dropTableIfExists("recipe");
};
