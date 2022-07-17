const request = require("request");

_EXTERNAL_URL = "https://kasirpintar.co.id/allAddress.txt";

const callApiRequest = (callback) => {
  request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

module.exports.callApi = callApiRequest;