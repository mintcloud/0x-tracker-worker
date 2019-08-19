const _ = require('lodash');
const ms = require('ms');

module.exports = {
  appVersion: _.get(process.env, 'HEROKU_RELEASE_VERSION', null),
  bugsnag: {
    token: _.get(process.env, 'BUGSNAG_TOKEN', null),
  },
  cryptoCompare: {
    apiKey: process.env.CRYPTO_COMPARE_API_KEY,
  },
  database: {
    connectionString: process.env.CONNECTION_STRING,
    poolSize: process.env.POOL_SIZE || 30,
  },
  ercDex: {
    feeRecipientPollingInterval: ms('1 minute'),
  },
  ethplorer: {
    apiKey: process.env.ETHPLORER_API_KEY,
  },
  jobs: {
    convertFees: {
      batchSize: 100,
    },
    createFills: {
      batchSize: 500,
    },
    deriveFillPrices: {
      batchSize: 100,
    },
    measureFills: {
      batchSize: 100,
    },
    updateFillStatuses: {
      batchSize: 100,
    },
  },
  maxRetries: {
    default: 10,
  },
  pollingIntervals: {
    backfillRelayerRelationships: ms('1 minute'),
    cacheAddressMetrics: ms('1 minute'),
    cacheRelayerMetrics: ms('1 minute'),
    cacheTokenMetrics: ms('1 minute'),
    cacheTokenStats: ms('1 minute'),
    default: ms('30 seconds'),
    getMissingTokenImages: ms('1 minute'),
    getNewArticles: ms('10 minutes'),
    resolveTokens: ms('1 minute'),
    updateRelayerStats: ms('1 minute'),
  },
  web3: {
    endpoint: `https://cloudflare-eth.com`,
  },
};
