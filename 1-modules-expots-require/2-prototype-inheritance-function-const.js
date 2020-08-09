// Theory
// We can create a JSON object using a function in JS.
// This function is called constructor function.
// Any object of this function can be then added inheritance prototype

// constructor function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Object created by the function constructor
var john = new Person("John", "Doe");
console.log(john.firstName);

// Adding new properties to existing object
Person.prototype.greet = function() {
    console.log("Hello " + this.firstName + " " + this.lastName);
}

// Now this property is automatically available to all the objects of Person type.
john.greet();

// Another e.g
var jane = new Person("Jane", "Doe");
jane.greet();