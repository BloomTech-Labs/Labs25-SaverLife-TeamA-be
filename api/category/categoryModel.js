const db = require('../../data/db-config');

const findAll = async () => {
  return await db('categories');
};

const findBy = (filter) => {
  return db('categories').where(filter);
};

const findById = async (id) => {
  return db('categories').where({ id }).first().select('*');
};

const create = async (category) => {
  return db('categories').insert(category).returning('*');
};

const update = (id, category) => {
  //   console.log(category);
  return db('categories')
    .where({ id: id })
    .first()
    .update(category)
    .returning('*');
};

const remove = async (id) => {
  return await db('categories').where({ id }).del();
};

module.exports = { findAll, findBy, findById, create, update, remove };
