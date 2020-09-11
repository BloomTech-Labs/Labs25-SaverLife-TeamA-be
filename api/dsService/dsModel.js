const axios = require('axios');
const dsConfig = require('../../config/dsConfig');
const dsClient = axios.create(dsConfig);
const db = require('../../data/db-config');

const getUserByEmail = async (useremail) => {
  console.log(useremail);
  return db('profiles')
    .where({ email: `${useremail}` })
    .first();
};

const getPrediction = (x1, x2, x3) => {
  return dsClient.post('/predict', { x1, x2, x3 });
};

const getViz = (state) => {
  return dsClient.get(`/viz/${state}`);
};

const getMoneyFlow = async (user_ID, time_period) => {
  return getUserByEmail(user_ID).then(async (user) => {
    return await dsClient.post(`/moneyflow`, {
      user_ID: user.saverlife_profile_username,
      time_period,
    });
  });
};

const getSpending = async (user_ID, graph_type, time_period) => {
  return getUserByEmail(user_ID).then(async (user) => {
    return await dsClient.post('/spending', {
      user_ID: user.saverlife_profile_username,
      graph_type,
      time_period,
    });
  });
};

const getFutureBudget = async (user_id, monthly_savings_goal, placeholder) => {
  return getUserByEmail(user_id).then(async (user) => {
    return dsClient.post('/future_budget', {
      user_id: user.saverlife_profile_username,
      monthly_savings_goal,
      placeholder,
    });
  });
};

const getCurrentMonthSpending = async (user_id) => {
  return getUserByEmail(user_id).then(async (user) => {
    return dsClient.get(
      `/current_month_spending?user_id=${user.saverlife_profile_username}`
    );
  });
};

module.exports = {
  getPrediction,
  getViz,
  getSpending,
  getMoneyFlow,
  getFutureBudget,
  getCurrentMonthSpending,
};
