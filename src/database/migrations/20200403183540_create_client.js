
exports.up = function(knex) {
  return knex.schema.createTable('clients', function(table){
      table.increments();
      table.string('name').notNullable();
      table.string('birthDate').notNullable();
      table.string('address').notNullable();
      table.string('email').unique().notNullable();
      table.string('phone').nullable();
      table.string('whatsapp').notNullable();
      table.string('facebook').nullable();
      table.string('instagram').nullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('clients');
};
