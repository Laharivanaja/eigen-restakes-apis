exports.getRewardInfo = (req, res) => {
  const { address } = req.params;

  res.json({
    wallet: address,
    totalRewards: 1.23,
    rewardsByValidator: [
      {
        validator: "0xValidator1",
        amount: 0.8
      },
      {
        validator: "0xValidator2",
        amount: 0.43
      }
    ]
  });
};
