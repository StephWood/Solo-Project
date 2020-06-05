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
  const { name, city } = req.body;
  // console.log('inside addRestaurant');
  models.Restaurant.create(
    // console.log('inside Restaurant.create ', req.body, { name }),
    { name, city },
    (err, result) => {
      res.locals.restaurants = result;
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

poiController.deleteRestaurant = (req, res, next) => {
  const { name, city } = req.params;
  models.Restaurant.deleteOne({ name, city }, (err, result) => {
    res.locals.restaurants = result;
    if (err) {
      return next({
        log: 'Error in poiController.deleteRestaurant',
        message: { err: `Error is ${err}` },
      });
    }
    return next();
  });
};

module.exports = poiController;
