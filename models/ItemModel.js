const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type : String,
        require: [true,"Please enter a item name"]
    },
    price: Number,
    quantity:{
        type : Number,
        default:"1",
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;