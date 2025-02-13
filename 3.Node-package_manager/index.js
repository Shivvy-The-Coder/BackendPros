const loadsh = require("loadsh");

const name = ["sangam", "john", "terry", "alex", "mia"];
const capitalize = loadsh.map(names, loadsh.capitalize);

console.log(capitalize);
