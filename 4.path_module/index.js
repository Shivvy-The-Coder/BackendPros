const path = require("path");
console.log("Directory name :", path.dirname(__filename));
console.log("file name      :", path.basename(__filename));
console.log("file extension :", path.extname(__filename));

const joinpath = path.join("/user", "documents", "node", "projects");
console.log("joined path", joinpath);

const resolvepath = path.resolve("user", "documents", "node", "projects");
console.log("Resolve Path", resolvepath);

const normailzation = path.normalize("/user/..documents/../node/projects");
console.log(normailzation);
