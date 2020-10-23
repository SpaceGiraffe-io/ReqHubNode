const hashingUtility = require('../utility/hashing-utility');
const httpUtility = require('../utility/http-utility');

const merchantClient = {
  create: (publicKey, privateKey, baseAddress) => {
    return {
      track: (req) => {
        const url = req.path;
        const reqHubHeaders = httpUtility.generateHeaders('Merchant', publicKey, privateKey, url);
        const apiBase = baseAddress || 'https://api.reqhub.io';
        const data = {
          requestUrl: url
        };
        return httpUtility.createRequest(`${apiBase}/tracking`, 'POST', data, reqHubHeaders);
      }
    }
  }
};

module.exports = merchantClient;

