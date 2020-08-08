var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function () {
    console.log("GREETINGS FROM NODE EVENT EMITTER");
})

emtr.on('greet', function () {
    console.log("I AM IN BUILT IN EVENT MODULE OF JS");
})

emtr.emit("greet")

// Listener with argumanets

emtr.on('achecker', function (a) {
    if (a < 2)
        console.log("a is low");
    else if (a == 2)
        console.log("a is optimum");
    else
        console.log("a is high");
})

// In built in, we can pass arguments of the function with emitter itself
for (let i = 1; i <= 3; i++)
    emtr.emit('achecker', i)


// In GENERAL an event name is not typed in maually, for debugging purposes
// We can use another file to save these names
console.log("\n\nNOW USING eventConfig")

events = require("./eventConfig").events;

emtr.emit(events.GREET)
for (let i = 1; i <= 3; i++)
    emtr.emit(events.ACHECKER, i);

// Now if I misspell, debugger can help me in getting value of events.GREET
// Also if we want to change names of event, there is only one place I have to visit.