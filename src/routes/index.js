const express = require('express');
const router = express.Router();

const restakerRoutes = require('./restaker');
const validatorRoutes = require('./validator');
const rewardRoutes = require('./reward');

router.use('/restakers', restakerRoutes);
router.use('/validators', validatorRoutes);
router.use('/rewards', rewardRoutes);

module.exports = router;
