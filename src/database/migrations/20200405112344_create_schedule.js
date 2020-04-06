
exports.up = function(knex) {
  return knex.schema.createTable('schedules', function(table){
      table.increments();
      
      table.datetime('schedule').notNullable();
      table.integer('weekday').notNullable();
      table.string('status').notNullable();

      table.integer('client_id').notNullable();
      table.integer('service_id').notNullable();
        
      table.foreign('client_id').references('id').inTable('clients');
      table.foreign('service_id').references('id').inTable('services');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('schedules');
};
