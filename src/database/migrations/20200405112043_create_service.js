
exports.up = function(knex) {
  return knex.schema.createTable('services', function(table){
    table.increments();
    table.string('name').notNullable();
    table.decimal('duration').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('services');
};
