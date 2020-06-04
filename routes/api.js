const express = require('express');

const poiController = require('../controllers/poiController');

const router = express.Router();

router.get('/', poiController.getRestaurants, (req, res) =>
  res.status(200).json(res.locals.restaurants)
);

router.post('/add', poiController.addRestaurant, (req, res) =>
  res.status(200).json()
);

module.exports = router;
