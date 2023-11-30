const express = require('express');
const router = express.Router();

const getBook = require('../controllers/getBook');
const createBook = require('../controllers/createBook');
const updateBook = require('../controllers/updateBook');
const deleteBook = require('../controllers/deleteBook');
const getBookById = require('../controllers/getBookById');

router.get(' /api/books', getBook);

router.get('api/books/:id',getBookById);

router.post('/api/books', createItem);

router.put('api/books/:id', updateItem);

router.delete('api/books/:id', deleteItem);

module.exports = router;