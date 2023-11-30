const Item = require('../models/ItemModel');

const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteItem;