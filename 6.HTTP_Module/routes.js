// here we have imported the module http for creating the server
const http= require("http");
// created the Server with name server
const server = http.createServer((req,res)=>{

    // with the help of a callback function ,we are getting two parameters 
    // req and response , to get the url of page 3000 we use req.url
    const url = req.url;

    // stating if we are in the page 3000/ then do this
    if(url === '/')
        {res.writeHead(200, {"content-Type":"text/plain"});
        res.end("HOMEPAGE");}
    else if(url === '/projects')
        {res.writeHead(200, {"content-Type":"text/plain"});
        res.end("We are int he project page");}
    else
        {res.writeHead(404, {"content-Type":"text/plain"});
        res.end("Page not found");}
})

const port = 3000;
server.listen(port, ()=>{
    console.log(`Server is now listening to the port ${port}`);
})