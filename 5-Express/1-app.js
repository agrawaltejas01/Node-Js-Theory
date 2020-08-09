var express = require("express");

// express() returns createServer method
var app = express();

// Generally Port are decided by a complex Config file.
// This is a good practice.
var port = process.env.PORT || 3000;

app.get("/", function(req, res) { 
    res.send("<html> <head> Starting Express </head> <body> <h1> Hello World </h1> </body> </html>")
});

app.get("/api", (req, res) => {
    res.json({ firstname : "John", lastName : "Don" });
});

// liten method
app.listen(port);