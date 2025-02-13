
const fs = require("fs");
const path = require("path");
// fs module will be used for reading , writng deleting the fils/ folders
// path module willl be used for the manipulation of the folder paths andn file path


const dirpath = path.dirname(__filename);
console.log(dirpath);



const datafolder = path.join(__dirname, "data"); 
if (!fs.existsSync(datafolder)) { //checking id the foldername data exist inside of the folder or not
    fs.mkdirSync(datafolder); //if not than create a new folder and join it ith the current directory
    console.log("data folder has been created");//message that file has been created
} 
else console.log(datafolder);//of the folder already existed then simple print its directory path

const filepath = path.join(datafolder, "example.txt");
fs.writeFileSync(filepath, "hello from node js");
console.log("file create succesfully");
