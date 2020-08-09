var http = require("http");
var fs = require("fs");


http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });

        fs.createReadStream(__dirname + "/index.html").pipe(res);
    }

    else if (req.url === "/json") {
        res.writeHead(200, { "Content-Type": "application/json" });

        var obj = {
            firstName: "John",
            lastName: "Doe"
        };

        res.end(JSON.stringify(obj));
    }

    else {
        res.writeHead(404);
        res.end("BAD URL")
    }

}).listen(1337, "127.0.0.1")