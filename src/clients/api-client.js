const httpUtility = require('../utility/http-utility');
const reqhubUtility = require('../utility/reqhub-utility');

const apiClient = {
  create: (publicKey, privateKey) => {
    return {
      get: (url, options) => {
        const path = new URL(url).pathname;
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, path);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...requestOptions.headers,
          ...reqhubOptions.headers
        };
        return httpUtility.createRequest(url, 'GET', null, requestOptions);
      },

      post: (url, data, options) => {
        const path = new URL(url).pathname;
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, path);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...requestOptions.headers,
          ...reqhubOptions.headers
        };
        return httpUtility.createRequest(url, 'POST', data, requestOptions);
      },

      put: (url, data, options) => {
        const path = new URL(url).pathname;
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, path);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...requestOptions.headers,
          ...reqhubOptions.headers
        };
        return httpUtility.createRequest(url, 'PUT', data, requestOptions);
      },

      delete: (url, options) => {
        const path = new URL(url).pathname;
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, path);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...requestOptions.headers,
          ...reqhubOptions.headers
        };
        return httpUtility.createRequest(url, 'DELETE', null, requestOptions);
      },

      send: (url, method, data, options) => {
        const path = new URL(url).pathname;
        const reqhubOptions = reqhubUtility.generateHeaders('Client', publicKey, privateKey, path);
        const requestOptions = options || {};
        requestOptions.headers = {
          ...requestOptions.headers,
          ...reqhubOptions.headers
        };
        return httpUtility.createRequest(url, method, data, requestOptions);
      }
    }
  }
};

module.exports = apiClient;

