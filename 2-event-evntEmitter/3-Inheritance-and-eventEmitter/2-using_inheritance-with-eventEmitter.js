var Emitter = require("events");
var util = require("util");

function Greeter() {

    // This line is necessary.
    // If this line is not added, any prototyoes added to Emitter will not be added.
    Emitter.call(this);
    this.greeting = "Hello World !";
}

// util.inherits(a, b) => Any object of a should have properties of b as well
util.inherits(Greeter, Emitter);

// I can still add my own, new prototypes
Greeter.prototype.greet = function(data = null) {
    console.log(this.greeting);
    this.emit("greet", data);
}

var greeter1 = new Greeter();

greeter1.on("greet", function() {
    console.log("How are you doing");
})
greeter1.greet();

greeter1.on("greet", function(data) {
    console.log(data);
})
greeter1.greet("This also works")