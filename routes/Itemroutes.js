const express = require('express');
const router = express.Router();
const getItem = require('../controllers/getItem');
const createItem = require('../controllers/createItem');
const updateItem = require('../controllers/updateItem');
const deleteItem = require('../controllers/deleteItem');
const getItemById = require('../controllers/getItemById');

// GET /items
router.get('/', getItem);

router.get('/:id',getItemById)

// POST /items
router.post('/', createItem);

// PUT /items/:id
router.put('/:id', updateItem);

// DELETE /items/:id
router.delete('/:id', deleteItem);

module.exports = router;
