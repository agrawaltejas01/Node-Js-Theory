var type = function() {
    this.type = "Greetings from type 3";
    this.greet = function() {
        console.log(this.type);
    }
}

var type3 = new type();

module.exports = type3;