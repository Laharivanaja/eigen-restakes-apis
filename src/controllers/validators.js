exports.getValidators = (req, res) => {
  res.json([
    {
      operator: '0xvalidatorA',
      totalDelegated: 1000,
      status: 'active',
      slashHistory: []
    }
  ]);
};
