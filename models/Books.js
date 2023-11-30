const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    genre:{
        type:String,
        require:true,
    },
    publicationYear:{
        type:Number,
        require:true,
    },
    ISBN:{
        type:Number,
        require:true
    }
})

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;