import express from "express";
const app = express();
import cors from "cors";
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  console.log("Default route");
});
app.post("/submit", (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
});

app.listen(3000, () => {
  console.log("your server is running successfull!");
});