var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    // Here we are creating a stream from file directly to stream
    // Therefore no latency for reading the whole data first and then sending to res
    fs.createReadStream(__dirname + "/index.html").pipe(res);

}).listen(1337, "127.0.0.1")