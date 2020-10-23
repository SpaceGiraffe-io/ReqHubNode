const httpUtility = require('../utility/http-utility');
const reqhubUtility = require('../utility/reqhub-utility');

const apiClient = {
  create: (publicKey, privateKey) => {
    return {
      get: (url, options) => {
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...options.headers,
          ...reqhubOptions.headers
        };
        return httpUtility.createRequest(url, 'GET', null, requestOptions);
      },

      post: (url, data, options) => {
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...options.headers,
          ...reqhubOptions.headers
        };
        const requestData = data ? JSON.stringify(data) : null;
        return httpUtility.createRequest(url, 'POST', requestData, requestOptions);
      },

      put: (url, data, options) => {
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...options.headers,
          ...reqhubOptions.headers
        };
        const requestData = data ? JSON.stringify(data) : null;
        return httpUtility.createRequest(url, 'PUT', requestData, requestOptions);
      },

      delete: (url, options) => {
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...options.headers,
          ...reqhubOptions.headers
        };
        return httpUtility.createRequest(url, 'DELETE', null, requestOptions);
      },

      send: (url, method, data, options) => {
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...options.headers,
          ...reqhubOptions.headers
        };
        return httpUtility.createRequest(url, method, data, requestOptions);
      }
    }
  }
};

module.exports = apiClient;

