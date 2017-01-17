var Animal = require('./classToExport.class.js');

// Test 
var animal1 = new Animal(
  "Garfield", "cat", "2010-11-29"
);

console.log(animal1.sayHi());

console.log("\n\n_name",animal1._name);