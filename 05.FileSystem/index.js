const fs = require("fs");
const path = require("path")

// creating a folder inside of of the current directory
const datafolder = path.join(__dirname, "data");

// checking if the file exists and if doesnt than fs.mkdirsync will create a new folder name data 
if(!fs.existsSync(datafolder))
        {
            fs.mkdirSync(datafolder);
            // a message telling taht the fodler has been created
            console.log("data folder has been created");
        }


// now after the folder has been created we need to create a file , herer we are creating a file with name example.txt
const filepath = path.join(datafolder, "example.txt");
// this is synchronous 

// now to wrote inside of the file we need to use writefileSync with the filepath that ha sbeen joined earlier
// for writing in a file we use writeFileSync
fs.writeFileSync(filepath, 'Hello from node js');
    console.log("file has been created succesfully");


// now for reading gthe file we need to use readFileSync
fs.appendFileSync(filepath, "\n next line has been added to prexisiting file");
console.log("new file contnet added")

console.log(fs.readFileSync(filepath,'utf8'))




// below here we are now going to use async mwthods

const asyncFilePath = path.join(datafolder, "asyncExample.txt");
fs.writeFile(asyncFilePath, "hello Async node js ", (err)=>{
    if(err)
        throw err;
    console.log("Async file has been created succesfully");
})


fs.appendFile(asyncFilePath, "\n next line to the file has been added",(err)=>{
    if(err)throw err;
    console.log("\n new line ha been added")
})

fs.readFile(asyncFilePath,"utf8",(err,data)=>{
    if(err)
        throw err
    console.log("File contents:\n", data);
}

);