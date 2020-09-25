exports.up = function (knex) {
  return (
    knex.schema
      // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .createTable('profiles', function (table) {
        table.increments();
        table.integer('bank_account_id').unsigned().notNullable();
        table.string('color_schema', 60);
        table.string('spending_bar_time_period', 10);
        table.string('net_income_time_period', 10);
        table.string('spending_graph_type', 3);
        table.string('email', 100);
        table.boolean('dark_mode_enabled');
      })
  );
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('profiles');
};
