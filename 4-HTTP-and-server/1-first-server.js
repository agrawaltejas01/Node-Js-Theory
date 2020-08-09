var http = require("http");

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text-plain' });
    res.end("Hello World\n");
}).listen(1337, "127.0.0.1");

// http.createServer() => takes an event listner.
// res.writeHead(status_code, { 'Content-Type' : "MIME_TYPE OF THE DATA TO BE RETURNED" })
// res.end(Data to be sent back)
// listen(port_number, address)