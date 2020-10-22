const merchantMiddleware = require('../../src/middleware/merchant-middleware');

describe('merchantMiddleware', () => {
  it('should be defined', () => {
    expect(merchantMiddleware).toBeTruthy();
  });

  it('should create', () => {
    const result = merchantMiddleware.create('publicKey', 'privateKey');
    expect(result).toBeTruthy();
  });

  it('should run', () => {
    const next = jest.fn();
    const req = {};
    const res = {};
    const middleware = merchantMiddleware.create('publicKey', 'privateKey');
    middleware(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
  });
});

