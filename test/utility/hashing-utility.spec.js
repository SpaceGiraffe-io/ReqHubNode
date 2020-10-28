const hashingUtility = require('../../src/utility/hashing-utility');

describe('hashingUtility', () => {
  it('should be defined', () => {
    expect(hashingUtility).toBeTruthy();
  });

  it('should generate timestamp', () => {
    const result = hashingUtility.generateTimestamp();
    expect(result.length).toBe(13);
  });

  it('should generate nonce', () => {
    const result = hashingUtility.generateNonce();
    expect(result.length).toBeGreaterThan(20);
  });

  it('should generate token', () => {
    const result = hashingUtility.generateToken('publicKey', 'privateKey', 'timestamp', 'nonce', '/request-url');
    expect(result.length).toBeGreaterThan(40);
  });
});

