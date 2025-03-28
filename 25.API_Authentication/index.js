import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Shivam1234";
const yourPassword = "456123";
const yourAPIKey = "9bea6d15-a06e-42ce-83f7-94d308eea8ea";
const yourBearerToken = "94aab12e-5e28-4fb8-b035-6fea8c6de78d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try{
    const result1=await axios.get(API_URL+"random");
    const result=result1.data;
    console.log(result);
    res.render("index.ejs", { content: result });
  }
  catch(error)
    {
      console.error(`Error `,error.message);
      res.render("index.ejs",{Error:error})
    }
});

app.get("/basicAuth", async(req, res) => {
  try{
    const result1=await axios.get(API_URL+"all?page=2",{
      auth:{
        username:yourUsername,
        password:yourPassword
      }
    });
    const result=result1.data;
    console.log(result);
    res.render("index.ejs", { content: result[Math.floor(Math.random() * result.length)]});
  }
  catch(error)
    {
      console.error(`Error `,error.message);
      res.render("index.ejs",{Error:error})
    }
});

app.get("/apiKey", async(req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
