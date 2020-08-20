exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, name: 'housing', money_allocated: 700.0, budget_id: 1 },
        { id: 2, name: 'transportation', money_allocated: 540.5, budget_id: 1 },
        { id: 3, name: 'food', money_allocated: 87.99, budget_id: 3 },
      ]);
    });
};
