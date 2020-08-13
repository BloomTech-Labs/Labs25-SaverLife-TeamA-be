
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('budgets').del()
    .then(function () {
      // Inserts seed entries
      return knex('budgets').insert([
        {id: 1, income: 35000.00, profile_id: 3},
        {id: 2, income: 29500.50, profile_id: 2},
        {id: 3, income: 32500.90, profile_id: 1}
      ]);
    });
};
