exports.up = function (knex) {
  return (
    knex.schema
      // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .createTable('profiles', function (table) {
        table.increments();
        table.decimal('income').unsigned()
        table.string('address', 60);
        table.string('email', 100)
        table.integer('saverlife_profile_id').unsigned().notNullable().unique();
      })
      .createTable('budgets', function (table) {
        table.increments();
        table.decimal('income').unsigned().notNullable();
        table
          .integer('profile_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('profiles')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
      .createTable('categories', function (table) {
        table.increments();
        table.string('name', 50).notNullable();
        table.decimal('money_allocated').unsigned().notNullable();
        table
          .integer('budget_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('budgets')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
  );
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('categories')
    .dropTableIfExists('budgets')
    .dropTableIfExists('profiles');
};
