const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send("hellow World");
})
app.get('/Apps',(req,res)=>{
    res.send("hellow to the Apps Section1");
})

const port = 3000;

app.listen(port,()=>{
    console.log("Server is running at ", port);
})
