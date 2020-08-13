const express = require('express');
const authRequired = require('../middleware/authRequired');
const Budgets = require('./budgetModel');
const router = express.Router();

router.get('/', authRequired, function (req, res) {
  Budgets.findAll()
    .then((budgets) => {
      res.status(200).json(budgets);
    })
    .catch((err) => {
    //   console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', authRequired, function (req, res) {
  const id = String(req.params.id);
  Budgets.findById(id)
    .then((budget) => {
      if (budget) {
        res.status(200).json(budget);
      } else {
        res.status(404).json({ error: 'BudgetNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', authRequired, async (req, res) => {
  const budget = req.body;
  if (budget) {
    const id = budget.id || 0;
    try {
      await Budgets.findById(id).then(async (pf) => {
        if (pf == undefined) {
          //budget not found so lets insert it
          await Budgets.create(budget).then((budget) =>
            res
              .status(200)
              .json({ message: 'budget created', budget: budget[0] })
          );
        } else {
          res.status(400).json({ message: 'budget already exists' });
        }
      });
    } catch (e) {
    //   console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(400).json({ message: 'Budget missing' });
  }
});

router.put('/', authRequired, (req, res) => {
  const budget = req.body;
  if (budget) {
    const id = budget.id || 0;
    Budgets.findById(id)
      .then(
        Budgets.update(id, budget)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'budget created', budget: updated[0] });
          })
          .catch((err) => {
            res.status(500).json({
              message: `Could not update budget '${id}'`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find budget '${id}'`,
          error: err.message,
        });
      });
  }
});

router.delete('/:id', authRequired, (req, res) => {
  const id = req.params.id;
  Budgets.remove(id)
    .then((deleted) => {
      res
        .status(200)
        .json({ message: `Budget '${id}' was deleted.`, budget: deleted });
    })
    .catch((err) => {
      res.status(500).json({
        message: `Could not delete budget with ID: ${id}`,
        error: err.message,
      });
    });
});

module.exports = router;
