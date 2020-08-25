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

module.exports = { getPrediction, getViz, getSpending };
