var obj = {
    name : "John Doe",
    greet : () => {
        console.log(`Hello ${ this.name }`);
    },

    greet1 : (data) => {
        console.log(`Hello ${ data } says ${ this.name }`)
    }
}

obj.greet();

// call and apply can borrow methods of other objects and use them
// Whatever you pass in the 1st argument will be pointed by this pointer in the function
obj.greet.call({ name : "Tejas" });
// this.name = Tejas here
obj.greet1.call({ name : "sagar"}, "World");

// Difference between call and apply is just about passing the parameters
// apply takes array
obj.greet.call({ name : "Tejas" });
obj.greet1.call({ name : "sagar"}, ["World"]);