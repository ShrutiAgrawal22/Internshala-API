const express = require('express');

const router = express.Router();

const {homepage} = require('../controllers/indexController');

//routes
router.get('/', homepage);

module.exports = router;