const Book = require('../models/Books');

const createbook = async (req, res) => {
  try {
    const newbook = new Book(req.body);
    await newbook.save();
    res.status(201).json(newbook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createbook;