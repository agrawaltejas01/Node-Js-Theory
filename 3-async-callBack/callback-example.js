function greet(callback) {
    console.log("Hello");
    var data = {
        name : "John"
    };
    callback(data);
}

greet(function() {
    console.log("World");
})

greet(function(data) {
    console.log(data.name);
})