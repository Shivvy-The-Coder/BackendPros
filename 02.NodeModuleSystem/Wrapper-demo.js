const moduleWrapper = require("./moduleWrapper");

console.log(`in wrapper demo.js file $`);

console.log(`__filename inside Wrapper demo ${__filename}`);
console.log(`__dirname  inside Wrapper demo ${__dirname}`);

moduleWrapper.greet("Shivam das");
