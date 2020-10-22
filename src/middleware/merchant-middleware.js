
const merchantMiddleware = {
  create: (publicKey, privateKey) => {
    return (req, res, next) => {
      next();
    };
  }
};

module.exports = merchantMiddleware;

