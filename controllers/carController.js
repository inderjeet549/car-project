const Car = require("../models/Car");

const getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

const addCar = async (req, res) => {
  const { name, model, price, available, category, image } = req.body;
  try {
    const car = new Car({ name, model, price, available, category, image });
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: "Failed to add car" });
  }
};

module.exports = { getCars, addCar };
