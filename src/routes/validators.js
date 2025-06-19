const express = require('express');
const router = express.Router();
const validatorController = require('../controllers/validators');

router.get('/', validatorController.getValidators);

module.exports = router;
