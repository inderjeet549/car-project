const Item = require('../models/ItemModel');

const getItemList = async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getItemList;