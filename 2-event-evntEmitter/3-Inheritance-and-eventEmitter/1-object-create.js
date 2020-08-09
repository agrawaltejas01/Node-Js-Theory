// We can use Object.create(josn object) 
// to initialize a variable to object of that json object type

var Persons =  {
    firstName : "",
    lastName : "",

    greet : function() {
        console.log(this.firstName + " " + this.lastName)
    }
}

var john = Object.create(Persons);
john.firstName = "John";
john.lastName = "Doe";
john.greet();

var jane = Object.create(Persons);
jane.firstName = "Jane";
jane.lastName = "Doe";
jane.greet();
