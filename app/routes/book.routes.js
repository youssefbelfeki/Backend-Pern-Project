const {getAllBooks} = require('../controllers/book.controllers');
const router = require('express').Router();

router.route('/api/book/getAllBooks').get(getAllBooks)

module.exports = router;