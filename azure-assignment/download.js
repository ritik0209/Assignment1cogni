var fs = require("fs");
const request = require("request");

var download = function (url, filename, callback) {
  request.head(url, function (err, res, body) {
    // console.log("content-type:", res.headers["content-type"]);
    // console.log("content-length:", res.headers["content-length"]);

    request(url).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};

module.exports = { download };
