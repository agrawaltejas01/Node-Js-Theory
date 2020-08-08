var type = function() {
    this.type = "Greetings from type 4";
    this.greet = function() {
        console.log(this.type);
    }
}

module.exports = type;