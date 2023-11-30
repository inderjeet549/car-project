const Item = require('../models/ItemModel');

const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateItem;