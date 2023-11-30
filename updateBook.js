const Book = require('../models/Books');

const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateBook;