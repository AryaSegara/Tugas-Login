import express from "express";
import conn from "./database.js";
import {addUser} from"./route/register.js";


const app = express();
app.use(express.static("public"));
app.use(express.json());

app.post("/api/register",addUser);

app.listen(3000 , () =>{
    console.log("Port telah berjalan di 3000");
})