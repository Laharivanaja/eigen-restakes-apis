// controllers/restakers.js

const Restaker = require('../models/restaker'); // Ensure correct model path

// GET /restakers
exports.getRestakers = async (req, res) => {
  try {
    const restakers = await Restaker.find({}, {
      _id: 0,
      userAddress: 1,
      amountRestakedStETH: 1,
      targetAVSOperatorAddress: 1
    });

    res.status(200).json(restakers);
  } catch (error) {
    console.error('Error fetching restakers:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
};
