// require('dotenv').config({path:'./env'})    // first method for dotenv

// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";


// <<<<<<< CODE FOR HOW TO CONNECT DATABASE >>>>>>>>>
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"; // Ensure you are using the app from app.js

dotenv.config({
    path: './env' // Correct the path to your .env file
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });











/*
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error) =>{
            console.log("error!",error);
            throw error
        })


        app.listen(process.env.PORT,() =>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:", error)
        throw err
    }
})()
*/

