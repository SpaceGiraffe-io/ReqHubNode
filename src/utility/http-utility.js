const https = require('https');

const hashingUtility = require('../utility/hashing-utility');

const httpUtility = {
  createRequest: (url, method, data, options) => {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: method,
        ...options
      };

      // ensure the headers option is defined, without removing user-defined headers
      requestOptions.headers = requestOptions.headers || {};

      // set up headers for POST/PUT/PATCH requests
      if (requestData) {
        if (!requestOptions.headers['Content-Type']) {
          requestOptions.headers['Content-Type'] = 'application/json';
        }

        if (!requestOptions.headers['Content-Length']) {
          requestOptions.headers['Content-Length'] = data.length;
        }
      }

      // set up ReqHub headers
      const requestUrl = url;

      // send the request
      const req = https.request(url, requestOptions, res => {
        res.on('data', responseData => {
          resolve(responseData);
        });
      });

      req.on('error', error => {
        reject(error);
      });

      if (requestData) {
        req.write(requestData);
      }
      req.end();
    });
  },

  generateHeaders: (type, publicKey, privateKey, requestUrl) => {
    const timestamp = hashingUtility.generateTimestamp();
    const nonce = hashingUtility.generateNonce();
    const token = hashingUtility.generateToken(publicKey, privateKey, timestamp, nonce, requestUrl);

    var headers = {
      [`${type}Key`]: publicKey,
      [`${type}Url`]: requestUrl,
      [`${type}Timestamp`]: timestamp,
      [`${type}Nonce`]: nonce,
      [`${type}Token`]: token
    };
    return { headers };
  }
};

module.exports = httpUtility;

