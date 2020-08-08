const type1 = require('./type1');
type1();

const type2 = require('./type2').type2;
type2();

const type3 = require('./type3');
type3.greet();
type3.type = "Changed Type";

// Here if we export an object, it will be modified by another instance of it. Since objects are passed by reference
const type3_2 = require('./type3');
type3_2.greet();

// Therefore if you want to export objects, prefered method is to pass constructor function
const type4 = require('./type4');
var type4_obj = new type4();
type4_obj.greet();

const type5 = require('./type5').type5;
type5();