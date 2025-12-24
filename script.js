import express  from "express";
import bodyparser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname=dirname (fileURLToPath(import.meta.url));

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json()); 

app.get("/",(req,res)=>{
  res.sendFile(_dirname + "/index.html");
})
app.post("/submit",(req,res)=>{
  console.log(req.body);
})
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
