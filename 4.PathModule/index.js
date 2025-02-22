// __filenem tells us he complete file path which we are currently using
console.log(__filename)
// this is how we locate the file name using __filename




const { log } = require("console");
// get the path module herer
const path = require("path");
console.log("directory path ",path.dirname(__filename))



// to get the file name only
console.log("file name", path.basename(__filename))


// to get the file extension name
console.log("file extension ", path.extname(__filename))


// how tp join path in node 
const joinpath = path.join("/user","documents","node","projects");
console.log("JOINED PATH ", joinpath);


// thsis how we resolve yth epath , resolving mean givng the entire path from the drive
const resolvepath = path.resolve("user", "documents", "node", "projects");
console.log("resolved path ", resolvepath);


// normalizing the path, this will simplif the path and aviud the going and comming in same directiry by moving to
// a single direcrory onlu once
const normalizepath = path.normalize("/user/.documents/../node/projects")
console.log("Normalize path", normalizepath);
