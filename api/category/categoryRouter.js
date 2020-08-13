const express = require('express');
const authRequired = require('../middleware/authRequired');
const Categories = require('./categoryModel');
const router = express.Router();

router.get('/', authRequired, function (req, res) {
  Categories.findAll()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', authRequired, function (req, res) {
  const id = String(req.params.id);
  Categories.findById(id)
    .then((category) => {
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ error: 'categoryNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/', authRequired, async (req, res) => {
  const category = req.body;
  if (category) {
    const id = category.id || 0;
    try {
      await Categories.findById(id).then(async (pf) => {
        if (pf == undefined) {
          //category not found so lets insert it
          await Categories.create(category).then((category) =>
            res
              .status(200)
              .json({ message: 'category created', category: category[0] })
          );
        } else {
          res.status(400).json({ message: 'category already exists' });
        }
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(400).json({ message: 'category missing' });
  }
});

router.put('/', authRequired, (req, res) => {
  const category = req.body;
  if (category) {
    const id = category.id || 0;
    Categories.findById(id)
      .then(
        Categories.update(id, category)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'category created', category: updated[0] });
          })
          .catch((err) => {
            res.status(500).json({
              message: `Could not update category '${id}'`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find category '${id}'`,
          error: err.message,
        });
      });
  }
});

router.delete('/:id', authRequired, (req, res) => {
  const id = req.params.id;
  Categories.remove(id)
    .then((deleted) => {
      res
        .status(200)
        .json({ message: `category '${id}' was deleted.`, category: deleted });
    })
    .catch((err) => {
      res.status(500).json({
        message: `Could not delete category with ID: ${id}`,
        error: err.message,
      });
    });
});

module.exports = router;
