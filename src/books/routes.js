const express = require('express');
const router = express.Router();
const bookController = require('./controller');

router.post('/', bookController.createBook);
router.get('/search', bookController.searchBooks);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router; 