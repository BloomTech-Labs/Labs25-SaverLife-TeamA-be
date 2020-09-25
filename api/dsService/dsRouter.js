const express = require('express');
const router = express.Router();
const dsModel = require('./dsModel');
// const authRequired = require('../middleware/authRequired');

router.post('/moneyflow', function (req, res) {
  dsModel
    .getMoneyFlow(req.body.user_ID, req.body.time_period)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      // console.error(error);
      res.status(500).json(error);
    });
});

router.post('/spending', function (req, res) {
  dsModel
    .getSpending(req.body.user_ID, req.body.graph_type, req.body.time_period)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      // console.error(error);
      res.status(500).json(error);
    });
});

router.post('/future_budget', function (req, res) {
  dsModel
    .getFutureBudget(
      req.body.user_id,
      req.body.monthly_savings_goal,
      req.body.placeholder
    )
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      // console.error(error);
      res.status(500).json(error);
    });
});

router.post('/current_month_spending/:user_id', function (req, res) {
  dsModel
    .getCurrentMonthSpending(req.params.user_id, req.body.categories)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      // console.error(error);
      res.status(500).json(error);
    });
});

router.get('/dashboard/:user_id', function (req, res) {
  dsModel
    .getDashboard(req.params.user_id)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
