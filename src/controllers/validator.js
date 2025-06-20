// controllers/validators.js

const Validator = require('../models/Validator'); // Ensure path is correct

// GET /validators
exports.getValidators = async (req, res) => {
  try {
    const validators = await Validator.find({}, {
      _id: 0,
      operatorAddress: 1,
      totalDelegatedStakeStETH: 1,
      slashHistory: 1,
      status: 1
    });

    res.status(200).json(validators);
  } catch (error) {
    console.error('Error fetching validators:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
