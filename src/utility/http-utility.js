const https = require('https');

const httpUtility = {
  createRequest: (url, method, data, options) => {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: method,
        ...options
      };

      const requestData = data ? JSON.stringify(data) : null;

      // ensure the headers option is defined, without removing user-defined headers
      requestOptions.headers = requestOptions.headers || {};

      // set up headers for POST/PUT/PATCH requests
      if (requestData) {
        if (!requestOptions.headers['Content-Type']) {
          requestOptions.headers['Content-Type'] = 'application/json';
        }

        if (!requestOptions.headers['Content-Length']) {
          requestOptions.headers['Content-Length'] = requestData.length;
        }
      }

      // send the request
      const req = https.request(url, requestOptions, res => {

        const responseData = [];

        res.on('data', (chunk) => {
          responseData.push(chunk);
        });

        res.on('end', () => {
          let result = Buffer.concat(responseData).toString();
          try {
            result = JSON.parse(result);
          } catch {
            // couldn't parse json, just resolve the string
          } finally {
            resolve(result);
          }
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

