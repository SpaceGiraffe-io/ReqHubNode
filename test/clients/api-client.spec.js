const apiClient = require('../../src/clients/api-client');

describe('apiClient', () => {
  it('should be defined', () => {
    expect(apiClient).toBeTruthy();
  });

  it('should test', () => {
    const result = apiClient.test();
    expect(result).toBe(true);
  });
});

