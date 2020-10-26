const httpUtility = require('../utility/http-utility');
const reqhubUtility = require('../utility/reqhub-utility');

const merchantClient = {
  create: (publicKey, privateKey, baseAddress) => {
    const apiBase = baseAddress || 'https://api.reqhub.io';

    return {
      track: (req) => {
        const path = req.path;
        const reqhubOptions = reqhubUtility.generateHeaders('Merchant', publicKey, privateKey, path);

        // add the client headers
        reqhubOptions.headers = {
          ...reqhubOptions.headers,
          'ClientKey': req.headers['ClientKey'],
          'ClientUrl': req.headers['ClientUrl'],
          'ClientTimestamp': req.headers['ClientTimestamp'],
          'ClientNonce': req.headers['ClientNonce'],
          'ClientToken': req.headers['ClientKeToken']
        };

        const data = {
          requestUrl: path
        };
        return httpUtility.createRequest(`${apiBase}/tracking`, 'POST', data, reqhubOptions);
      }
    }
  }
};

module.exports = merchantClient;

