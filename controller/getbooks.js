const Book = require('../models/ItemModel');

const getBooks = async (req, res) => {
    try {
      const Book = await Book.find();
      res.json(Book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getBooks;