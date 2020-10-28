const apiClient = require('../../src/clients/api-client');

const httpUtility = require('../../src/utility/http-utility');
const reqhubUtility = require('../../src/utility/reqhub-utility');

describe('apiClient', () => {
  it('should be defined', () => {
    expect(apiClient).toBeTruthy();
  });

  it('should create', () => {
    const client = apiClient.create('publicKey', 'privateKey');
    expect(client.get).toBeTruthy();
    expect(client.post).toBeTruthy();
    expect(client.put).toBeTruthy();
    expect(client.delete).toBeTruthy();
    expect(client.send).toBeTruthy();
  });

  describe('get', () => {
    let client;

    beforeEach(() => {
      client = apiClient.create('publicKey', 'privateKey');
    });

    it('should create request', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.get('/url');
      expect(spy).toHaveBeenCalledWith('/url', 'GET', null, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.get('/url', options);
      expect(spy).toHaveBeenCalledWith('/url', 'GET', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.get('/url');
      expect(spy).toHaveBeenCalledWith('/url', 'GET', null, { headers: { 'ClientKey': 'test' } });
    });

    it('should create request with combined headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.get('/url', options);
      expect(spy).toHaveBeenCalledWith('/url', 'GET', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      const result = client.get('/url', options);
      expect(spy).toHaveBeenCalledWith('/url', 'GET', null, { headers: {}, test: true });
    });
  });

  describe('post', () => {
    let client;

    beforeEach(() => {
      client = apiClient.create('publicKey', 'privateKey');
    });

    it('should create request', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.post('/url');
      expect(spy).toHaveBeenCalledWith('/url', 'POST', undefined, { headers: {} });
    });

    it('should create request with data', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const data = {
        test: 5
      };
      const result = client.post('/url', data);
      expect(spy).toHaveBeenCalledWith('/url', 'POST', { test: 5 }, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.post('/url', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'POST', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.post('/url');
      expect(spy).toHaveBeenCalledWith('/url', 'POST', undefined, { headers: { 'ClientKey': 'test' } });
    });

    it('should create request with combined headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.post('/url', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'POST', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      const result = client.post('/url', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'POST', null, { headers: {}, test: true });
    });
  });

  describe('put', () => {
    let client;

    beforeEach(() => {
      client = apiClient.create('publicKey', 'privateKey');
    });

    it('should create request', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.put('/url');
      expect(spy).toHaveBeenCalledWith('/url', 'PUT', undefined, { headers: {} });
    });

    it('should create request with data', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const data = {
        test: 5
      };
      const result = client.put('/url', data);
      expect(spy).toHaveBeenCalledWith('/url', 'PUT', { test: 5 }, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.put('/url', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'PUT', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.put('/url');
      expect(spy).toHaveBeenCalledWith('/url', 'PUT', undefined, { headers: { 'ClientKey': 'test' } });
    });

    it('should create request with combined headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.put('/url', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'PUT', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      const result = client.put('/url', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'PUT', null, { headers: {}, test: true });
    });
  });

  describe('delete', () => {
    let client;

    beforeEach(() => {
      client = apiClient.create('publicKey', 'privateKey');
    });

    it('should create request', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.delete('/url');
      expect(spy).toHaveBeenCalledWith('/url', 'DELETE', null, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.delete('/url', options);
      expect(spy).toHaveBeenCalledWith('/url', 'DELETE', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.delete('/url');
      expect(spy).toHaveBeenCalledWith('/url', 'DELETE', null, { headers: { 'ClientKey': 'test' } });
    });

    it('should create request with combined headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.delete('/url', options);
      expect(spy).toHaveBeenCalledWith('/url', 'DELETE', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      const result = client.delete('/url', options);
      expect(spy).toHaveBeenCalledWith('/url', 'DELETE', null, { headers: {}, test: true });
    });
  });

  describe('send', () => {
    let client;

    beforeEach(() => {
      client = apiClient.create('publicKey', 'privateKey');
    });

    it('should create request', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.send('/url', 'TEST');
      expect(spy).toHaveBeenCalledWith('/url', 'TEST', undefined, { headers: {} });
    });

    it('should create request with data', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const data = {
        test: 5
      };
      const result = client.send('/url', 'TEST', data);
      expect(spy).toHaveBeenCalledWith('/url', 'TEST', { test: 5 }, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.send('/url', 'TEST', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'TEST', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const result = client.send('/url', 'TEST');
      expect(spy).toHaveBeenCalledWith('/url', 'TEST', undefined, { headers: { 'ClientKey': 'test' } });
    });

    it('should create request with combined headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      const result = client.send('/url', 'TEST', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'TEST', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      const result = client.send('/url', 'TEST', null, options);
      expect(spy).toHaveBeenCalledWith('/url', 'TEST', null, { headers: {}, test: true });
    });
  });
});

