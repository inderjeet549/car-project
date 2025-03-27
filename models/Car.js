const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  name: String,
  model: String,
  price: Number,
  available: Boolean,
  category: String,
  image: String,
});

module.exports = mongoose.model("Car", CarSchema);
