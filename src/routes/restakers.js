const express = require('express');
const router = express.Router();
const restakerController = require('../controllers/restakers');

router.get('/', restakerController.getRestakers);

module.exports = router;
