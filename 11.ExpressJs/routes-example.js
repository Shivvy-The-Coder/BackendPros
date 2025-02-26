const express = require('express')
const app = express();

// root route
app.get('/',(req,res)=>{
    res.send("Welcome to our homepage");
});

// get all prodcuts
app.get('/products',(req,res)=>{
    // res.send("Welcome to our homepage");
    const products=[
        {
            id:1,
            label:'product1'
        },
        {
            id:2,
            label:'product2'
        },
        {
            id:4,
            label:'product3'
        },
    ]
    res.json();
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server  is running at port ${port}`);
})