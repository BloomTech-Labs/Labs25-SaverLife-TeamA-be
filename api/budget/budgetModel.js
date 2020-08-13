const db = require('../../data/db-config');

const findAll = async () => {
  return await db('budgets');
};

const findBy = (filter) => {
  return db('budgets').where(filter);
};

const findById = async (id) => {
  return db('budgets').where({ id }).first().select('*');
};

const create = async (budget) => {
  return db('budgets').insert(budget).returning('*');
};

const update = (id, budget) => {
  //   console.log(budget);
  return db('budgets').where({ id: id }).first().update(budget).returning('*');
};

const remove = async (id) => {
  return await db('budgets').where({ id }).del();
};

module.exports = { findAll, findBy, findById, create, update, remove };
