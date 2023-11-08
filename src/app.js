import express from "express";
import { json } from "express";
import connection from "./db/conn.js"; // Ensure the correct path to conn.js
import studentRouter from "./routers/student.js"; // Ensure the correct path to student.js

// Import your models here (e.g., Student model)
import Student from "./models/students.js"; // Ensure the correct path to students.js

const port = 8801;
const app = express();

app.use(json());
app.use(studentRouter);

app.get("/ping",(req, res)=>{
  res.send("Pong");
})

app.listen(port, () => {
  console.log(`Connected to the Backend on port ${port}`);
});
