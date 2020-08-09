// function statement
function greet() {
    console.log("Hi, inside greet");
}
greet();

// function as first class
function logGreet(fn) {
    console.log("Inside logGreet");
    // function in JS can be used as variable, to pass it in another function
    fn();
}
logGreet(greet);
// logGreet(greet()) will not work, becoz in logGreet we need fn();
// greet() will return a null


// function expression
var greetMe = function() {
    console.log("Hi Tejas");
}
greetMe();
logGreet(greetMe);

// function expression on the fly
logGreet(function() {
    console.log("Inside logGreeting");
});