// EJS is a templating language , we use templaing so that the data passed on by client from thier side can be regeclected in our preexisiting pagesor static pages that are present inside our 
// file, usinh this we can write bits of javascript inside of html file on;y thingtaht differs is trhat the file name ends with .ejs 
// that is it will be index.ejs


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const date = new Date();
    var day,adv;
    if(date.getDay <=5)
         {day=" a weekday"
          adv=" its time to work hard"
         }
    else
         {
            day=" a weekEnd"
          adv=" its time to Party hard"
         }
    res.render("index.ejs",
        {
            
            daytype:day,advice:adv
        }
    );
})


app.listen(port,(req,res)=>{
    console.log("Server is running at ",port);
})
