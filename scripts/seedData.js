require('dotenv').config();
const mongoose = require('mongoose');

// ✅ Corrected paths
const Restaker = require('../src/models/restaker');
const Validator = require('../src/models/validator');
const Reward = require('../src/models/reward');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected for seeding');

    await Restaker.deleteMany({});
    await Validator.deleteMany({});
    await Reward.deleteMany({});

    await Restaker.insertMany([
      {
        userAddress: "0xabc123...",
        amountRestakedStETH: "100.5",
        targetAVSOperatorAddress: "0xvalidator123...",
        lastUpdated: new Date()
      }
    ]);

    await Validator.insertMany([
      {
        operatorAddress: "0xvalidator123...",
        totalDelegatedStakeStETH: "5000",
        slashHistory: [
          {
            timestamp: 1678886400,
            amountStETH: "50",
            reason: "Misconduct X"
          }
        ],
        status: "active",
        lastUpdated: new Date()
      }
    ]);

    await Reward.insertMany([
      {
        walletAddress: "0xabc123...",
        totalRewardsReceivedStETH: "75.2",
        rewardsBreakdown: [
          {
            operatorAddress: "0xvalidator123...",
            amountStETH: "60.0",
            timestamps: [1678972800, 1679059200]
          }
        ],
        lastUpdated: new Date()
      }
    ]);

    console.log('🌱 Seeding complete!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('❌ Seeding error:', err);
  });
