import express from "express";
import axios from "axios";
import body from "body-parser";


const app = express();
const port = 3000;

const apiKey = "68dc163358b225d4eec9aecb4f8808d8";
const API_URL =`https://api.openweathermap.org/data/2.5/weather?lat=23.3721&lon=85.3383&appid=${apiKey }`;


app.use(express.static('public'));

app.get("/",async (req,res)=>{
    try{
        const response= await axios.get(API_URL);
        console.log("Weather :",response.data.weather[0].main)
        res.render("index.ejs", {
            data:response.data.weather[0].main,     
        })
    }
    catch(error)
    {
        console.error("Error :",error.message);
        res.sendStatus(404);
    }
})

app.listen(port, ()=>{
    console.log(`Server is running at address ${port}`);
})