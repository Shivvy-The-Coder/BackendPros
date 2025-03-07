//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import parser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(parser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/check',(req,res)=>{
    if(req.body.password==="ILoveProgramming")
        {
            res.sendFile(__dirname+"/public/secret.html")
            console.log("Entry Succesfull");
        }    
        else
            alert("Wrong Password");
            
})

app.listen(port, (req,res)=>{
    console.log(`The Server is running at ${port}`);
})