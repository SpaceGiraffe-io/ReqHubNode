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
      client.get('https://spacegiraffe.io/url');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'GET', null, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      client.get('https://spacegiraffe.io/url', options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'GET', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      client.get('https://spacegiraffe.io/url');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'GET', null, { headers: { 'ClientKey': 'test' } });
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
      client.get('https://spacegiraffe.io/url', options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'GET', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      client.get('https://spacegiraffe.io/url', options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'GET', null, { headers: {}, test: true });
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
      client.post('https://spacegiraffe.io/url');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'POST', undefined, { headers: {} });
    });

    it('should create request with data', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const data = {
        test: 5
      };
      client.post('https://spacegiraffe.io/url', data);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'POST', { test: 5 }, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      client.post('https://spacegiraffe.io/url', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'POST', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      client.post('https://spacegiraffe.io/url');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'POST', undefined, { headers: { 'ClientKey': 'test' } });
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
      client.post('https://spacegiraffe.io/url', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'POST', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      client.post('https://spacegiraffe.io/url', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'POST', null, { headers: {}, test: true });
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
      client.put('https://spacegiraffe.io/url');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'PUT', undefined, { headers: {} });
    });

    it('should create request with data', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const data = {
        test: 5
      };
      client.put('https://spacegiraffe.io/url', data);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'PUT', { test: 5 }, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      client.put('https://spacegiraffe.io/url', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'PUT', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      client.put('https://spacegiraffe.io/url');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'PUT', undefined, { headers: { 'ClientKey': 'test' } });
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
      client.put('https://spacegiraffe.io/url', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'PUT', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      client.put('https://spacegiraffe.io/url', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'PUT', null, { headers: {}, test: true });
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
      client.delete('https://spacegiraffe.io/url');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'DELETE', null, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      client.delete('https://spacegiraffe.io/url', options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'DELETE', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      client.delete('https://spacegiraffe.io/url');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'DELETE', null, { headers: { 'ClientKey': 'test' } });
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
      client.delete('https://spacegiraffe.io/url', options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'DELETE', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      client.delete('https://spacegiraffe.io/url', options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'DELETE', null, { headers: {}, test: true });
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
      client.send('https://spacegiraffe.io/url', 'TEST');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'TEST', undefined, { headers: {} });
    });

    it('should create request with data', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const data = {
        test: 5
      };
      client.send('https://spacegiraffe.io/url', 'TEST', data);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'TEST', { test: 5 }, { headers: {} });
    });

    it('should create request with header options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        headers: {
          test: 'header'
        }
      };
      client.send('https://spacegiraffe.io/url', 'TEST', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'TEST', null, { headers: { test: 'header' } });
    });

    it('should create request with ReqHub headers', () => {
      const reqhubOptions = {
        headers: {
          'ClientKey': 'test'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      client.send('https://spacegiraffe.io/url', 'TEST');
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'TEST', undefined, { headers: { 'ClientKey': 'test' } });
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
      client.send('https://spacegiraffe.io/url', 'TEST', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'TEST', null, { headers: { 'ClientKey': 'test', test: 'header' } });
    });

    it('should include other options', () => {
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue({});
      const spy = spyOn(httpUtility, 'createRequest');
      const options = {
        test: true
      };
      client.send('https://spacegiraffe.io/url', 'TEST', null, options);
      expect(spy).toHaveBeenCalledWith('https://spacegiraffe.io/url', 'TEST', null, { headers: {}, test: true });
    });
  });
});

