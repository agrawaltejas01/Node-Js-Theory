var Emitter = require("./custom-emitter");

var emtr = new Emitter();

emtr.on('greet', function () {
    console.log("GREETINGS DEVELOPER")
});

emtr.on('greet', function () {
    console.log("GREETINGS HAS HAPPENED");
})

emtr.emit("greet");


// New Example
var a = 3;

function aCheckerFunction(a) {
    if (a < 2)
        console.log("a is low");

    else if (a == 2)
        console.log("a is optimum");
    else
        console.log("a is high");
}

emtr.on("aChecker", function() {
    aCheckerFunction(a);
})

emtr.emit("aChecker");
