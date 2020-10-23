const httpUtility = require('../utility/http-utility');
const reqhubUtility = require('../utility/reqhub-utility');

const merchantClient = {
  create: (publicKey, privateKey, baseAddress) => {
    return {
      track: (req) => {
        const url = req.path;
        const reqHubHeaders = reqhubUtility.generateHeaders('Merchant', publicKey, privateKey, url);
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

