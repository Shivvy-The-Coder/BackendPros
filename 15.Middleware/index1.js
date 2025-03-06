import express from "express";
import { dirname } from "path";
import parser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(parser.urlencoded({ extended: true }))

app.post('/submit',(req, res)=> {
  res.send('welcome, ' + req.body); 
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
