const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  wallet: String,
  totalRewards: Number,
  rewardsByValidator: [
    {
      validator: String,
      amount: Number,
    },
  ],
});

module.exports = mongoose.model('Reward', RewardSchema);
