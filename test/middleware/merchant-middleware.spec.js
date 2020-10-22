const merchantMiddleware = require('../../src/middleware/merchant-middleware');

describe('merchantMiddleware', () => {
  it('should be defined', () => {
    expect(merchantMiddleware).toBeTruthy();
  });

  it('should test', () => {
    const result = merchantMiddleware.test();
    expect(result).toBe(true);
  });
});

