console.log("node module wrapper demo");

console.log("__filename inside module wrapper ", __filename);
console.log("__dirname insdie module wrapper ", __dirname);


// heere we are exporting a fucntion with name greet and a parameter name wheiihc will be passed
// by the user when the user passes it
 
module.exports.greet = function (name) {
  console.log(`Hello ${name}`);
};
