exports.getRestakers = (req, res) => {
  res.json([
    {
      address: '0xabc123',
      amountRestaked: 10.5,
      validator: '0xvalidatorA'
    }
  ]);
};
