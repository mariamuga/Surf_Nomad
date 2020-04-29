const mongoose = require("mongoose");
const { Schema } = mongoose;

const spotSchema = new Schema({
  name: String,
  description: String,
  location: {
    coordinates: [Number],
    region: String,
    country: String,
  },
  best_tide: String,
  type: String,
  seabed: String,
  swell_direction: String,
  wind_direction: String,
  swell_range: String,
});

const Spot = mongoose.model("Spot", spotSchema);

module.exports = Spot;
