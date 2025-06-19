const express = require('express');
const router = express.Router();
const rewardController = require('../controllers/rewards');

router.get('/:address', rewardController.getRewardInfo);

module.exports = router;
