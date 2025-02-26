const express = require('express')
const app = express();

// root route
app.get('/',(req,res)=>{
    res.send("Welcome to our homepage");
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server  is running at port ${port}`);
})