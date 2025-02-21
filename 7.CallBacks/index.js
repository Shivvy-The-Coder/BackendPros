// callback are fuctions that are passsed as an argument to another functions
// callback hell happens when we use recursion of funxtion 

const  fs = require("fs");

function person(name, callbackfn)
    {
        console.log(`Hello${name}`);
        callbackfn();

    }
function address()
    {
        console.log("india");
    }
person("sangam Mukharjee",address);


fs.readFile('input.txt', 'utf8',(err,data)=>{
    if(err)
          {  console.log("error reading file");
    return}
    console.group(data);
})