const first = require("./first-module");

console.log(first.add(2, 3));

// try catch handling in javascript

try {
  let result = first.divide(0, 1);
  console.log(result);
} catch (error)
{
  console.log("caught an error ", error.message);
}


