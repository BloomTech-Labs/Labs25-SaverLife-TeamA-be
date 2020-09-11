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
          income: 50000.00,
          address: '',
          bank_account_id: 183004,
          email: 'llama001@maildrop.cc',
          saverlife_profile_username: 'mEQmv8ybP1t3o3bYnKzwFqP5jad1KKUM8N06o',
        },
        {
          id: 2,
          income: 50000.00,
          address: '',
          bank_account_id: 204390,
          email: 'llama002@maildrop.cc',
          saverlife_profile_username: 'X1VPwkEJAzHBEaByOrmDHMoDQEJO5ws4OnkXy',
        },
        {
          id: 3,
          income: 50000.00,
          address: '',
          bank_account_id: 191721,
          email: 'llama003@maildrop.cc',
          saverlife_profile_username: '1635ob1dkQIz1QMjLmBpt0E36VyM96ImeyrgZ',
        },
      ]);
    });
};
