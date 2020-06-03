const models = require('../models/poiModels');

const poiController = {};

poiController.getRestaurants = (req, res, next) => {
  models.Restaurant.find({})
    .exec()
    .then((data) => {
      res.locals.restaurants = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Error in poiController.getRestaurants',
        message: { err: `Error is ${err}` },
      });
    });
};

// poiController.addRestaurant = (req, res, next) => {};

module.exports = poiController;
