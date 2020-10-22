const merchantClient = require('../../src/clients/merchant-client');

describe('merchantClient', () => {
  it('should be defined', () => {
    expect(merchantClient).toBeTruthy();
  });

  it('should test', () => {
    const result = merchantClient.test();
    expect(result).toBe(true);
  });
});

