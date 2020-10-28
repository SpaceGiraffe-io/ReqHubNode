const merchantClient = require('../../src/clients/merchant-client');

const httpUtility = require('../../src/utility/http-utility');
const reqhubUtility = require('../../src/utility/reqhub-utility');

describe('merchantClient', () => {
  it('should be defined', () => {
    expect(merchantClient).toBeTruthy();
  });

  it('should create', () => {
    const client = merchantClient.create('publicKey', 'privateKey');
    expect(client.track).toBeTruthy();
  });

  describe('track', () => {
    it('should create request', () => {
      const client = merchantClient.create('publicKey', 'privateKey');
      const reqhubOptions = {
        headers: {
          'MerchantKey': 'merchant-key',
          'MerchantUrl': 'merchant-url',
          'MerchantTimestamp': 'merchant-timestamp',
          'MerchantNonce': 'merchant-nonce',
          'MerchantToken': 'merchant-token'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const req = {
        path: '/path',
        headers: {
          'clientkey': 'client-key',
          'clienturl': 'client-url',
          'clienttimestamp': 'client-timestamp',
          'clientnonce': 'client-nonce',
          'clienttoken': 'client-token'
        }
      };

      const result = client.track(req);

      const expectedHeaders = {
        'MerchantKey': 'merchant-key',
        'MerchantUrl': 'merchant-url',
        'MerchantTimestamp': 'merchant-timestamp',
        'MerchantNonce': 'merchant-nonce',
        'MerchantToken': 'merchant-token',
        'ClientKey': 'client-key',
        'ClientUrl': 'client-url',
        'ClientTimestamp': 'client-timestamp',
        'ClientNonce': 'client-nonce',
        'ClientToken': 'client-token'
      };
      expect(spy).toHaveBeenCalledWith('https://api.reqhub.io/tracking', 'POST', { requestUrl: '/path' }, { headers: expectedHeaders });
    });

    it('should create request with alternate base address', () => {
      const client = merchantClient.create('publicKey', 'privateKey', 'https://test.reqhub.io');
      const reqhubOptions = {
        headers: {
          'MerchantKey': 'merchant-key',
          'MerchantUrl': 'merchant-url',
          'MerchantTimestamp': 'merchant-timestamp',
          'MerchantNonce': 'merchant-nonce',
          'MerchantToken': 'merchant-token'
        }
      };
      spyOn(reqhubUtility, 'generateHeaders').and.returnValue(reqhubOptions);
      const spy = spyOn(httpUtility, 'createRequest');
      const req = {
        path: '/path',
        headers: {
          'clientkey': 'client-key',
          'clienturl': 'client-url',
          'clienttimestamp': 'client-timestamp',
          'clientnonce': 'client-nonce',
          'clienttoken': 'client-token'
        }
      };

      const result = client.track(req);

      const expectedHeaders = {
        'MerchantKey': 'merchant-key',
        'MerchantUrl': 'merchant-url',
        'MerchantTimestamp': 'merchant-timestamp',
        'MerchantNonce': 'merchant-nonce',
        'MerchantToken': 'merchant-token',
        'ClientKey': 'client-key',
        'ClientUrl': 'client-url',
        'ClientTimestamp': 'client-timestamp',
        'ClientNonce': 'client-nonce',
        'ClientToken': 'client-token'
      };
      expect(spy).toHaveBeenCalledWith('https://test.reqhub.io/tracking', 'POST', { requestUrl: '/path' }, { headers: expectedHeaders });
    });
  });
});

