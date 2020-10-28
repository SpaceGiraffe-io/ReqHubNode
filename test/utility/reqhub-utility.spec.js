const reqhubUtility = require('../../src/utility/reqhub-utility');

const hashingUtility = require('../../src/utility/hashing-utility');

describe('reqhubUtility', () => {
  it('should be defined', () => {
    expect(reqhubUtility).toBeTruthy();
  });

  it('should generate headers', () => {
    spyOn(hashingUtility, 'generateTimestamp').and.returnValue('timestamp');
    spyOn(hashingUtility, 'generateNonce').and.returnValue('nonce');
    spyOn(hashingUtility, 'generateToken').and.returnValue('token');

    const result = reqhubUtility.generateHeaders('test', 'publicKey', 'privateKey', '/url');

    expect(result.headers['testKey']).toBe('publicKey');
    expect(result.headers['testUrl']).toBe('/url');
    expect(result.headers['testTimestamp']).toBe('timestamp');
    expect(result.headers['testNonce']).toBe('nonce');
    expect(result.headers['testToken']).toBe('token');
  });
});

