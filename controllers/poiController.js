const models = require('../models/poiModels');

const poiController = {};

poiController.getRestaurants = (req, res, next) => {
  console.log('inside getRestaurants');
  models.Restaurant.find({})
    .exec()
    .then((data) => {
      console.log(data);
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

poiController.addRestaurant = (req, res, next) => {
  console.log('inside addRestaurant');
  models.Restaurant.create(
    { name: req.params.name, city: req.params.city },
    (err, result) => {
      if (err) {
        return next({
          log: 'Error in poiController.addRestaurant',
          message: { err: `Error is ${err}` },
        });
      }
      return next();
    }
  );
};

module.exports = poiController;
