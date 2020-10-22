const apiClient = require('./src/clients/api-client');
const merchantMiddleware = require('./src/middleware/merchant-middleware');
const hashingUtility = require('./src/utility/hashing-utility');

const reqhub = {
  apiClient: {
    ...apiClient
  },
  middleware: {
    ...merchantMiddleware
  },
  utilities: {
    ...hashingUtility
  }
};

exports.reqhub = reqhub;

