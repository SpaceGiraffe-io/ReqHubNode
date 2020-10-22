const hashingUtility = require('../../src/utility/hashing-utility');

describe('hashingUtility', () => {
  it('should be defined', () => {
    expect(hashingUtility).toBeTruthy();
  });

  it('should generateTimestamp', () => {
    const result = hashingUtility.generateTimestamp();
    expect(result.length).toBe(13);
  });

  it('should generateNonce', () => {
    const result = hashingUtility.generateNonce();
    expect(result.length).toBeGreaterThan(20);
  });

  it('should generateToken', () => {
    const result = hashingUtility.generateToken('privateKey', 'publicKey', 'timestamp', 'nonce', '/request-url');
    expect(result.length).toBeGreaterThan(40);
  });
});

