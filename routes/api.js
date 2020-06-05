const express = require('express');

const poiController = require('../controllers/poiController');

const router = express.Router();

router.get('/', poiController.getRestaurants, (req, res) =>
  res.status(200).json(res.locals.restaurants)
);

router.post(
  '/add',
  poiController.addRestaurant,
  poiController.getRestaurants,
  (req, res) => res.status(200).json(res.locals.restaurants)
);

router.delete(
  '/delete',
  poiController.deleteRestaurant,
  poiController.getRestaurants,
  (req, res) => res.status(200).json(res.locals.restaurants)
);

module.exports = router;
