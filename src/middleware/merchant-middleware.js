const merchantClient = require('../clients/merchant-client');

const merchantMiddleware = {
  create: (publicKey, privateKey, baseAddress) => {
    const client = merchantClient.create(publicKey, privateKey, baseAddress);

    return (req, res, next) => {
      client.track(req)
        .then((data) => {
          // Add some data about the client.
          //
          // This SO answer was inconclusive on whether additional data should be attached to req or res.locals,
          // so we did both.
          // https://stackoverflow.com/questions/18875292/passing-variables-to-the-next-middleware-using-next-in-express-js
          //
          // If you have a rock solid reason why this should be one way and not the other,
          // open an issue at https://github.com/SpaceGiraffe-io/ReqHubNode/issues
          req.reqhub = data;
          res.locals.reqhub = data;
          next();
        })
        .catch((error) => {
          const message = `403 forbidden. ${error}`;
          res.status(403).send(message);
        });
    };
  }
};

module.exports = merchantMiddleware;

