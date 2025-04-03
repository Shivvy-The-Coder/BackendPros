import express from "express";
import axios from "axios";
import body from "body-parser";


const app = express();
const port = 3000;

const apiKey = "68dc163358b225d4eec9aecb4f8808d8";
const API_URL =`https://api.openweathermap.org/data/2.5/weather?lat=23.3721&lon=85.3383&appid=${apiKey }`;


app.use(express.static('public'));
app.use(body.urlencoded({extended:true}));

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
async function getLat (country, state,city)
    {
        try
        {
            const result = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`);
            const response=result.data;
            // console.log(respon se);
            return response;
        }
        catch(error)
            {
                console.error("Wrong :", error.message);
                return error.message;
            }
    }


app.post("/weather",async(req,res)=>{
    console.log(req.body);
    const {country,state,city}=req.body;

    try
    {
        const ans = await getLat(country,state,city);
        console.log(ans);
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ans[0].lat}&lon=${ans[0].lon}&appid=${apiKey }`);
        console.log(result.data);
        res.render("index.ejs",{
            data:result.data.weather[0].main,
        });
    }
    catch(error)
    {
        console.error("MESSAGE :", error.message);
    }
})

app.listen(port, ()=>{
    console.log(`Server is running at address ${port}`);
})