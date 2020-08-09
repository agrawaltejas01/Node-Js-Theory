var http = require("http");
var fs = require("fs");

http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "text/html" });

    // Basic HTML
    // var html = fs.readFileSync(__dirname + "/index.html")

    // fs.readFileSyn will return buffer, 
    // to make it in string we have to use the encoding method used i.e. utf8
    var html = fs.readFileSync(__dirname + "/dynamic_index.html", "utf-8");

    message = "Dynamically Created HTML"
    html = html.replace("{Message}", message);

    res.end(html)
}).listen(1337, "127.0.0.1");