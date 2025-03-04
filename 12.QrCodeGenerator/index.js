import express from 'express';
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs"

const app = express();

inquirer
  .prompt([
   {type:'input',
    name:"UserName",
    message:"What is your Name"
   },
   {
    type:"list",
    name:"language",
    message:"Whihc programming language you prefere ?",
    choices:['javascript','Python','java','C++'],
   }
  ])
  .then((answers) => {
    const qrAnswer= `Hello , ${answers.UserName}, You prefer ${answers.language}`
    var qr_svg = qr.image(qrAnswer, { type: 'svg' });
    qr_svg.pipe(fs.createWriteStream('Answer_QR.svg'));
    // console.log(`Hello , ${answers.UserName}, You prefer ${answers.language}`);
  });


const port =3000;
app.listen(port,(req,res)=>{
    console.log("App is running at port ", port);
})

