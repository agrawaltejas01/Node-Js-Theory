var level = require("./level.json")

var level2 = function() {
    console.log("Coming from " + level.level2);
}

module.exports = level2;