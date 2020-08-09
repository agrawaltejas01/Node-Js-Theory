var http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    var obj = {
        firstName : "John",
        lastName : "Doe"
    };

    res.end(JSON.stringify(obj));
    
}).listen(1337, "127.0.0.1")