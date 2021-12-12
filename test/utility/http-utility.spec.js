const httpUtility = require('../../src/utility/http-utility');

const https = require('https');

describe('httpUtility', () => {
  it('should be defined', () => {
    expect(httpUtility).toBeTruthy();
  });

  it('should create request', (done) => {
    const req = {
      on: jest.fn(),
      write: jest.fn(),
      end: jest.fn()
    };
    const res = {
      statusCode: 200,
      on: (event, resEventCallback) => {
        if (event === 'end') {
          resEventCallback();
        }
      }
    };
    spyOn(https, 'request').and.callFake((url, requestOptions, callback) => {
      callback(res);
      return req;
    });

    httpUtility.createRequest('https://spacegiraffe.io/url', 'TEST')
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });

  it('should create request with data', (done) => {
    const req = {
      on: jest.fn(),
      write: jest.fn(),
      end: jest.fn()
    };
    const res = {
      statusCode: 200,
      on: (event, resEventCallback) => {
        if (event === 'end') {
          resEventCallback();
        }
      }
    };
    spyOn(https, 'request').and.callFake((url, requestOptions, callback) => {
      callback(res);
      return req;
    });

    const data = {
      test: 5
    };

    httpUtility.createRequest('https://spacegiraffe.io/url', 'TEST', data)
      .then(() => {
        expect(req.write).toHaveBeenCalled();
        done();
      });
  });

  it('should create request with options', (done) => {
    const req = {
      on: jest.fn(),
      write: jest.fn(),
      end: jest.fn()
    };
    const res = {
      statusCode: 200,
      on: (event, resEventCallback) => {
        if (event === 'end') {
          resEventCallback();
        }
      }
    };
    spyOn(https, 'request').and.callFake((url, requestOptions, callback) => {
      callback(res);
      return req;
    });

    const options = {
      headers: {
        'Content-Type': 'test',
        'Content-Length': 5
      }
    };
    const data = {
      test: 5
    };

    httpUtility.createRequest('https://spacegiraffe.io/url', 'TEST', data, options)
      .then(() => {
        // coverage only -- hard to check parameters with the callback function
        done();
      });
  });

  it('should create request and handle data events', (done) => {
    spyOn(https, 'request').and.callFake((url, requestOptions, callback) => {
      const req = {
        on: jest.fn(),
        write: jest.fn(),
        end: jest.fn()
      };
      const res = {
        statusCode: 200,
        on: (event, resEventCallback) => {
          if (event === 'data') {
            const chunk = Buffer.from('test', 'utf-8');
            resEventCallback(chunk);
          } else if (event === 'end') {
            resEventCallback();
          }
        }
      };
      callback(res);
      return req;
    });

    httpUtility.createRequest('https://spacegiraffe.io/url', 'TEST')
      .then((response) => {
        expect(response.data).toBe('test');
        done();
      });
  });

  it('should reject on error', (done) => {
    const req = {
      on: (event, reqEventCallback) => {
        if (event === 'error') {
          reqEventCallback('test');
        }
      },
      write: jest.fn(),
      end: jest.fn()
    };
    spyOn(https, 'request').and.callFake(() => {
      return req;
    });

    httpUtility.createRequest('https://spacegiraffe.io/url', 'TEST')
      .catch((error) => {
        expect(error).toBe('test');
        done();
      });
  });
});

