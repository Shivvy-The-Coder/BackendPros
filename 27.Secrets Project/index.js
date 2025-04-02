// HINTS:
// 1. Import express and axio
import axios from "axios";
import express from "express";
import body from "body-parser";


// 2. Create an express app and set the port number.
const app = express();
const port=3000;
const API_URL="https://secrets-api.appbrewery.com/random";
// 3. Use the public folder for static files.
app.use(express.static("public"));
app.use(body.urlencoded({ extended: true }));

// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.get("/",async(req,res)=>{
    try{
        const response = await axios.get(API_URL);
        res.render("index.ejs", {
            secret:response.data.secret,
            user:response.data.username
        })
    }
    catch(error)
    {
        console.error(`Error encountered ${error.message}`);
        res.sendStatus(404);
    }
})

// 6. Listen on your predefined port and start the server.
app.listen(port,()=>{
    console.log(`server is runnning at ${port}`);
})