const merchantMiddleware = require('../../src/middleware/merchant-middleware');

const merchantClient = require('../../src/clients/merchant-client');

describe('merchantMiddleware', () => {
  it('should be defined', () => {
    expect(merchantMiddleware).toBeTruthy();
  });

  it('should create', () => {
    const reqhubMiddleware = merchantMiddleware.create('publicKey', 'privateKey');
    expect(reqhubMiddleware).toBeTruthy();
  });

  it('should run', () => {
    const merchantClientMock = {
      track: jest.fn().mockReturnValue({
        then: (callback) => {
          const response = {
            status: 200,
            data: {}
          };
          callback(response);
          return {
            catch: jest.fn()
          };
        }
      })
    };
    spyOn(merchantClient, 'create').and.returnValue(merchantClientMock);
    const next = jest.fn();
    const req = {};
    const res = {
      locals: {}
    };

    const middleware = merchantMiddleware.create('publicKey', 'privateKey');
    middleware(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(req.reqhub).toBeTruthy();
    expect(res.locals.reqhub).toBeTruthy();
  });

  it('should handle error responses', () => {
    const merchantClientMock = {
      track: jest.fn().mockReturnValue({
        then: (callback) => {
          const response = {
            status: 400,
            data: 'test'
          };
          callback(response);
          return {
            catch: jest.fn()
          };
        }
      })
    };
    spyOn(merchantClient, 'create').and.returnValue(merchantClientMock);
    const next = jest.fn();
    const req = {};
    const res = {
      status: jest.fn().mockReturnValue({
        send: jest.fn()
      })
    };

    const middleware = merchantMiddleware.create('publicKey', 'privateKey');
    middleware(req, res, next);

    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
  });

  it('should handle errors', () => {
    const merchantClientMock = {
      track: jest.fn().mockReturnValue({
        then: () => {
          return {
            catch: (callback) => {
              callback('test');
            }
          };
        }
      })
    };
    spyOn(merchantClient, 'create').and.returnValue(merchantClientMock);
    const next = jest.fn();
    const req = {};
    const res = {
      status: jest.fn().mockReturnValue({
        send: jest.fn()
      })
    };

    const middleware = merchantMiddleware.create('publicKey', 'privateKey');
    middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(next).not.toHaveBeenCalled();
  });
});

