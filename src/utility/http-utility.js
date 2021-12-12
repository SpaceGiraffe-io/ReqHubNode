const http = require('http');
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
        if (requestOptions.headers['Content-Type'] == null) {
          requestOptions.headers['Content-Type'] = 'application/json';
        }

        if (requestOptions.headers['Content-Length'] == null) {
          requestOptions.headers['Content-Length'] = requestData.length;
        }
      }

      // send the request
      const protocol = url.startsWith('https') ? https : http;
      const req = protocol.request(url, requestOptions, (res) => {
        const result = {
          status: res.statusCode
        };

        const dataBuffer = [];
        res.on('data', (chunk) => {
          dataBuffer.push(chunk);
        });

        res.on('end', () => {
          const dataString = Buffer.concat(dataBuffer).toString();
          try {
            result.data = JSON.parse(dataString);
          } catch (e) {
            // couldn't parse json, just use the string
            result.data = dataString;
          }
          resolve(result);
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

