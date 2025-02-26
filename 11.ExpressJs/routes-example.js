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
    res.json(products);
});



// get a single product, its a dynamic api route
app.get("/products/:id",(req,res)=>{
    const productId = parseInt(req.params.id);
    // here id should be same as the product/:id whoch has been mentioned earlier

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
    const getsingleProduct = products.find(product=>product.id===productId)
    if(getsingleProduct)
            res.json(getsingleProduct);
    else
            res.status(404).send("product is not found, try another ic")
}
)

const port = 3000;
app.listen(port,()=>{
    console.log(`server  is running at port ${port}`);
})