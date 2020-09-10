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
          email: 'llama001@maildrop.cc',
          saverlife_profile_username: 'mEQmv8ybP1t3o3bYnKzwFqP5jad1KKUM8N06o',
        },
        {
          id: 2,
          income: 50000.00,
          address: '',
          email: 'llama002@maildrop.cc',
          saverlife_profile_username: 'vq4mMRdZLeFon7bK63jefLOomaRPYBCmAJP6g',
        },
        {
          id: 3,
          income: 50000.00,
          address: '',
          email: 'llama003@maildrop.cc',
          saverlife_profile_username: 'ojQ7ZARMD3HvOxe0AM7ZfgqByxymNgcBdErKK',
        },
      ]);
    });
};
