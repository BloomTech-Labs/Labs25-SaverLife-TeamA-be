const axios = require('axios');
const dsConfig = require('../../config/dsConfig');
const dsClient = axios.create(dsConfig);

const getPrediction = (x1, x2, x3) => {
  return dsClient.post('/predict', { x1, x2, x3 });
};

const getViz = (state) => {
  return dsClient.get(`/viz/${state}`);
};

const getMoneyFlow = (user_ID, time_period) => {
  return dsClient.post(`/moneyflow`, { user_ID, time_period });
};

module.exports = { getPrediction, getViz, getMoneyFlow };
