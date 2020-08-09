var express = require("express")
var app = express();

var port = process.env.PORT || 3000;

// Accept all
app.get("/", (req, res) => {
    res.send("<html> <head> Starting Router </head> <body> <h1> Hello World </h1> </body> </html>")
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