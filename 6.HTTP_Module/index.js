// herer we are importing the http module
const http = require("http")

// creating a http server
//  we will et http req and response object, eq mean the data ha sbeen passed from client to server  and responese mean
// sending data from server to client
const server = http.createServer((req,res)=>{
    console.log(req,'req');

    //   here we are setting up the type of contemt we are trying to run up
    // here 200 mwans the request was succesfull
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // what data we are sending the message as string from the server to client page
    res.end("hello Node js from http module");
});

const port = 3000;
server.listen(port, ()=>{
    console.log(`server is listening to port ${port}` );
    
})