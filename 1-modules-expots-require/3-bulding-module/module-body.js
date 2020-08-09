var greet = function() {
    console.log("Hello, inside greet function in module body");
}

// Any module that requires this module, wont be able to access the functions or data inside this.
// Unless it is explicitely exported by means of means.exports


// Next level
var level1 = require("./base-level-1");
var level2 = require("./base-level-2");

module.exports = {
    greet : greet,
    level1 : level1,
    level2 : level2
};