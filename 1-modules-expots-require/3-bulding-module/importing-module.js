var importingObj = require('./module-body');

// Here we can use only the elements that are exported by the module
// Therefore following wont work if not exported
importingObj.greet();
importingObj.level1();
importingObj.level2();
