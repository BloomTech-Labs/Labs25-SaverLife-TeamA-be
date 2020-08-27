const axios = require('axios');
const dsConfig = require('../../config/dsConfig');
const dsClient = axios.create(dsConfig);

const getPrediction = (x1, x2, x3) => {
  return dsClient.post('/predict', { x1, x2, x3 });
};

const getViz = (state) => {
  return dsClient.get(`/viz/${state}`);
};

const getSpending = (user_ID, graph_type, time_period) => {
  return dsClient.post('/spending', { user_ID, graph_type, time_period });
};

const getMoneyFlow = (user_ID, time_period) => {
  return dsClient.post('/moneyflow', { user_ID, time_period });
};

const getFutureBudget = (user_id, monthly_savings_goal, placeholder) => {
  return dsClient.post('/future_budget', { user_id, monthly_savings_goal, placeholder });
};

const getCurrentMonthSpending = (user_id) => {
  return dsClient.get(`/current_month_spending?user_id=${user_id}`);
};

module.exports = { getPrediction, getViz, getSpending, getMoneyFlow, getFutureBudget, getCurrentMonthSpending };
