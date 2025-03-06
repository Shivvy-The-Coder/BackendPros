import express from "express";
import fs from "fs";
import qr from "qr-image"; 


const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/generate-qr',(req,res)=>{
    const imgurl = `https://drive.google.com/file/d/1-I2lT_A3Xrdo4pDeBcVRW1ip6TPYqPT5/view?usp=sharing`;
    const qr_svg = qr.image(imgurl, { type: 'svg' });
    res.type('svg');
    qr_svg.pipe(res);
})


app.get('/', (req, res) => {
    res.send(`
      <h1>QR Code for Image</h1>
      <p>Scan the QR code below to view the image:</p>
      <img height="200px" width="200px" src="/generate-qr" alt="QR Code">
    `);
  });

app.listen(port,(req,res)=>{
    console.log(`Server is running at ${port}`)
})