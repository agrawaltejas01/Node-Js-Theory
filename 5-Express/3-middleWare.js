// MiddleWare is something that seats in between 2 layers of software.
// In case of express, middleware is something that seats between request and response.

// Say we want to provide the stylesheet before a URL lodas.
// We have to use middleWare

var express = require("express")
var app = express();

var port = process.env.PORT || 3000;

// MiddleWare

app.use('/assets', express.static(__dirname + "/public"));
// Static tells that, every time you see /assets in URL go and load the file from /public directory

// We can write our own middleWares
app.use("/", (req, res, next) => {
    console.log(`Custom MiddleWare on ${req.url}`);

    // This is callback to next function or route that has to matched for the given path 
    next();
})

// Accept all
app.get("/", (req, res) => {
    res.send("<html> <head> <link href = assets/style.css type = text/css rel = stylesheet>   Starting Router </head> <body> <h1> Hello World </h1> </body> </html>")
});

// Passing variable through URL
app.get("/person/:id", function (req, res) {
    res.send(`
    <html> 
        <body> 
            <h1> 
                Hello Person number ${req.params.id} 
            </h1> 
        </body> 
    </html>`)

})

app.listen(port);