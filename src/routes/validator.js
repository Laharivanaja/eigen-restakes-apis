const express = require('express');
const router = express.Router();
const { getValidators } = require('../controllers/validator');

router.get('/', getValidators);

module.exports = router;
