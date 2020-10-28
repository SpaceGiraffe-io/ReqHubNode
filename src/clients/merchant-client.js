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
          'ClientKey': req.headers['clientkey'],
          'ClientUrl': req.headers['clienturl'],
          'ClientTimestamp': req.headers['clienttimestamp'],
          'ClientNonce': req.headers['clientnonce'],
          'ClientToken': req.headers['clienttoken']
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

