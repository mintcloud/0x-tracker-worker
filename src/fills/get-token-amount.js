const BigNumber = require('bignumber.js');

const getTokenAmount = (token, fill) => {
  if (fill.makerToken === token.address) {
    return new BigNumber(fill.makerAmount.toString());
  }

  if (fill.takerToken === token.address) {
    return new BigNumber(fill.takerAmount.toString());
  }

  return null;
};

module.exports = getTokenAmount;