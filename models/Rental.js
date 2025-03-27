const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  car: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
  rentalDate: Date,
  returnDate: Date,
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Rental", RentalSchema);
