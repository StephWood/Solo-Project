const mongoose = require('mongoose');

// connect to Mongo database via Mongoose, check for connection and log error if there is one
mongoose
  .connect('mongodb://localhost/poi_database', {
    useNewUrlParser: true,
    dbName: 'placesOfInterest',
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

// Restaurant schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: String,
});

const Restaurant = mongoose.model('restaurant', restaurantSchema);

module.exports = {
  Restaurant,
};
