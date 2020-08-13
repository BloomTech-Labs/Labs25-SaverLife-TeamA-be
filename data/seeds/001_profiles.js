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
          saving_target_amount: 400.0,
          time_unit: 'week',
          saverlife_profile_id: 247,
        },
        {
          id: 2,
          saving_target_amount: 750.0,
          time_unit: 'month',
          saverlife_profile_id: 2900,
        },
        {
          id: 3,
          saving_target_amount: 500.0,
          time_unit: 'year',
          saverlife_profile_id: 81,
        },
      ]);
    });
};
