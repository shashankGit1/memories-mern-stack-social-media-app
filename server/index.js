import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());
// https://mongodb.com

const port = 3001;

app.get('/', (req, res) => {
    res.send("hello world  ")
})
 
app.listen(port, ()=> {
    console.log(`Example app listening at ${port}` );
})
