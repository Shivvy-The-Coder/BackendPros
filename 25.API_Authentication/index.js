import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Shivam1234";
const yourPassword = "456123";
const yourAPIKey = "ae5f6a77-79e9-45d0-bd7a-d4ab0db34ee2";
const yourBearerToken = "d16369fc-396b-4dbc-8bf1-aff7e2761e1d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

// No Authentication
app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// basic Authentication
app.get("/basicAuth", async(req, res) => {
  try{
    const result1=await axios.get(API_URL+"/all?page=2",{
      auth:{
        username:yourUsername,
        password:yourPassword
      }
    });
    const result=JSON.stringify(result1.data);
    console.log(result);
    res.render("index.ejs", { content: result});
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

app.get("/bearerToken", async(req, res) => {
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
  try
    {
      
      const result=await axios.get(API_URL+"/secrets/2",{
        headers: { 
          Authorization:`Bearer ${yourBearerToken}`
        },
      });
      const Response=JSON.stringify(result.data);
      res.render("index.ejs",{
        content:Response,
      });
    }
  catch(error)
    {
        res.status(404).send(error.message);
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
