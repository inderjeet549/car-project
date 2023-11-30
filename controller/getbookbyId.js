const Book = require("../models/Books");

const getBookById=async(req,res)=>{
    try {
        const Books = await Book.findById(req.params.id, req.body, { new: true });
        res.json(Books);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = getBookById;