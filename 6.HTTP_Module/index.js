// herer we are importing the http module
const http = require("http")

// creating a http server
//  we will et http req and response object, eq mean the data ha sbeen passed from client to server  and responese mean
// sending data from server to client
const server = http.createServer((req,res)=>{
    console.log(req,'req');
    res.writeHead(200, {'content-Type':'text-plain'});
    res.end("hello Node js from http module");
});

const port = 3000;
server.listen(port, ()=>{
    console.log(`server is listening to port ${port}` );
    
})