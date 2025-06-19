const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaker = require('../src/models/Restaker');
const Validator = require('../src/models/Validator');
const Reward = require('../src/models/Reward');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');

    // Clear old data
    await Restaker.deleteMany({});
    await Validator.deleteMany({});
    await Reward.deleteMany({});

    // Sample data
    await Restaker.insertMany([
      {
        address: '0xabc123',
        amountRestaked: 12.5,
        validator: '0xval1',
      },
      {
        address: '0xdef456',
        amountRestaked: 20.3,
        validator: '0xval2',
      },
    ]);

    await Validator.insertMany([
      {
        operator: '0xval1',
        totalDelegated: 1000,
        status: 'active',
        slashHistory: [
          {
            timestamp: new Date(),
            amount: 50,
            reason: 'Downtime',
          },
        ],
      },
      {
        operator: '0xval2',
        totalDelegated: 800,
        status: 'jailed',
        slashHistory: [],
      },
    ]);

    await Reward.insertMany([
      {
        wallet: '0xabc123',
        totalRewards: 5.5,
        rewardsByValidator: [
          { validator: '0xval1', amount: 3.2 },
          { validator: '0xval2', amount: 2.3 },
        ],
      },
      {
        wallet: '0xdef456',
        totalRewards: 3.8,
        rewardsByValidator: [
          { validator: '0xval2', amount: 3.8 },
        ],
      },
    ]);

    console.log('✅ Seeding complete!');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('❌ MongoDB error:', err);
    mongoose.disconnect();
  });
