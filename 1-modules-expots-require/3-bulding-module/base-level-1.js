var level = require("./level.json")

var level1 = function() {
    console.log("Coming from " + level.level1);
}

module.exports = level1;