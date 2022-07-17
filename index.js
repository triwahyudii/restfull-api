const callApiRequest = require("./Request");
const callApiHttp = require("./Callback");

const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/user") {
      callApiRequest.callApi(function (response) {
        res.write(JSON.stringify(response));
        res.end();
      });
    } else if (req.url === "/apis") {
      callApiHttp.callApi(function (response) {
        res.write(response);
        res.end();
      });
    }
  })
  .listen(8000);

console.log("Server is running..");