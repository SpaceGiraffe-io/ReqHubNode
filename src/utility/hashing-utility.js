const CryptoJS = require('crypto-js');

const hashingUtility = {
  generateTimestamp: () => {
    return Date.now().toString();
  },
  generateNonce: () => {
    const nonceData = CryptoJS.lib.WordArray.random(20);
    const nonce = CryptoJS.enc.Base64.stringify(nonceData);
    return nonce;
  },
  generateToken: (privateKey, publicKey, timestamp, nonce, requestUrl) => {
    const secret = `${privateKey}${timestamp}${nonce}${requestUrl}`;
    const hmacsha256 = CryptoJS.HmacSHA256(publicKey, secret);
    const token = CryptoJS.enc.Base64.stringify(hmacsha256);
    return token;
  }
};

module.exports = hashingUtility;

