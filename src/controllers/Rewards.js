// controllers/rewards.js

const Reward = require('../models/reward'); // Make sure path is correct

// GET /rewards/:address
exports.getRewardsByAddress = async (req, res) => {
  try {
    const walletAddress = req.params.address.toLowerCase();

    const rewardData = await Reward.findOne({ walletAddress });

    if (!rewardData) {
      return res.status(404).json({ msg: 'No rewards found for this address' });
    }

    // Format response to match assignment spec
    const response = {
      walletAddress: rewardData.walletAddress,
      totalRewardsReceivedStETH: rewardData.totalRewardsReceivedStETH,
      rewardsBreakdown: rewardData.rewardsBreakdown.map(item => ({
        operatorAddress: item.operatorAddress,
        amountStETH: item.amountStETH,
        timestamps: item.timestamps || []
      }))
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching rewards:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
