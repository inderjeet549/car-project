const Item = require('../models/ItemModel');

const getItemById=async(req,res)=>{
    try {
        const items = await Item.findById(req.params.id, req.body, { new: true });
        res.json(items);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getItemById;