const httpUtility = require('../utility/http-utility');
const reqhubUtility = require('../utility/reqhub-utility');

const apiClient = {
  create: (publicKey, privateKey) => {
    return {
      get: (url, options) => {
        const reqHubHeaders = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = {
          ...options,
          ...reqHubHeaders
        };
        return httpUtility.createRequest(url, 'GET', null, requestOptions);
      },

      post: (url, data, options) => {
        const reqHubHeaders = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = {
          ...options,
          ...reqHubHeaders
        };
        const requestData = data ? JSON.stringify(data) : null;
        return httpUtility.createRequest(url, 'POST', requestData, requestOptions);
      },

      put: (url, data, options) => {
        const reqHubHeaders = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = {
          ...options,
          ...reqHubHeaders
        };
        const requestData = data ? JSON.stringify(data) : null;
        return httpUtility.createRequest(url, 'PUT', requestData, requestOptions);
      },

      delete: (url, options) => {
        const reqHubHeaders = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = {
          ...options,
          ...reqHubHeaders
        };
        return httpUtility.createRequest(url, 'DELETE', null, requestOptions);
      },

      send: (url, method, data, options) => {
        const reqHubHeaders = reqhubUtility.generateHeaders('Client', publicKey, privateKey, url);
        const requestOptions = {
          ...options,
          ...reqHubHeaders
        };
        return httpUtility.createRequest(url, method, data, requestOptions);
      }
    }
  }
};

module.exports = apiClient;

