// __filenem tells us he complete file path which we are currently using
console.log(__filename)





// get the path module herer
const path = require("path");
console.log("directory path ",path.dirname(__filename))



// to get the file name only
console.log("file name", path.basename(__filename))


// to get the file extension name
console.log("file extension ", path.extname(__filename))