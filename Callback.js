const https = require("https");

_EXTERNAL_URL = "https://kasirpintar.co.id/allAddress.txt";

const callApiHttp = (callback) => {
  https
    .get(_EXTERNAL_URL, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        return callback(data);
      });
    })
    .on("error", (err) => {
      console.log("error: " + err.message);
    });
};

module.exports.callApi = callApiHttp;