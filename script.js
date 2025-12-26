import express from "express";
const app = express();
import cors from "cors";
import mysql from "mysql2";
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'09July@2005',
  database:'authentication'
})
db.connect((err)=>{
  if(err){
    console.log("error occured!!!");
    return;
  }
  console.log("connected successfully");
})
app.get("/", (req, res) => {
  console.log("Default route");
});
app.post("/submit", (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  db.query(`INSERT INTO createlogin (email, password) VALUES ('${req.body.email}', '${req.body.password}');`)
});

app.listen(3000, () => {
  console.log("your server is running successfull!");
});