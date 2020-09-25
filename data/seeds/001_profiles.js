// const faker = require('faker');

// const profiles = [...new Array(5)].map((i, idx) => ({
//   id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
//   avatarUrl: faker.image.avatar(),
//   email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
//   name:
//     idx === 0
//       ? 'Test001 User'
//       : `${faker.name.firstName()} ${faker.name.lastName()}`,
// }));

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex('profiles')
//     .del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('profiles').insert(profiles);
//     });
// };

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          id: 1,
          bank_account_id: 183004,
          color_schema: 'green',
          spending_bar_time_period: 'week',
          net_income_time_period: 'month',
          spending_graph_type: 'pie',
          email: 'llama001@maildrop.cc',
          dark_mode_enabled: true,
        },
        {
          id: 2,
          bank_account_id: 74883,
          color_schema: 'blue',
          spending_bar_time_period: 'week',
          net_income_time_period: 'month',
          spending_graph_type: 'pie',
          email: 'llama002@maildrop.cc',
          dark_mode_enabled: false,
        },
        {
          id: 3,
          bank_account_id: 175698,
          color_schema: 'purple',
          spending_bar_time_period: 'week',
          net_income_time_period: 'month',
          spending_graph_type: 'pie',
          email: 'llama003@maildrop.cc',
          dark_mode_enabled: true,
        },
      ]);
    });
};
