const https = require('https');

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

      // send the request
      const req = https.request(url, requestOptions, res => {
        res.on('data', (responseData) => {
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
  }
};

module.exports = httpUtility;

