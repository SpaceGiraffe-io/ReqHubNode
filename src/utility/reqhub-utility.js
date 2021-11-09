const hashingUtility = require('./hashing-utility');

const reqhubUtility = {
  generateHeaders: (type, publicKey, privateKey, requestUrl) => {
    const path = new URL(requestUrl).pathname;
    const timestamp = hashingUtility.generateTimestamp();
    const nonce = hashingUtility.generateNonce();
    const token = hashingUtility.generateToken(publicKey, privateKey, timestamp, nonce, path);

    const headers = {
      [`${type}Key`]: publicKey,
      [`${type}Url`]: path,
      [`${type}Timestamp`]: timestamp,
      [`${type}Nonce`]: nonce,
      [`${type}Token`]: token
    };
    return { headers };
  }
};

module.exports = reqhubUtility;

