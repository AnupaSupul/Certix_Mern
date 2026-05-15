const express = require("express");
const app = express();
const port = 3000;
const userRoutes= require("./routers/userRoutes")
const mongoose = require("mongoose");
require("dotenv").config();
const errorMiddleware = require("./middleware/errorMiddleware")

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.error("Error connecting to MongoDB:", err);
})

app.get("/",(req,res)=>{
    res.send("Server Running")
});


app.use(express.json()); //Convert incoming JSON body into JavaScript object
app.use("/api/users",userRoutes);
app.use(errorMiddleware) //Global error handling middleware. It will catch any errors that occur in the routes and send a JSON response with the error message.
app. listen(port,()=>{
    console.log("Server is running on port "+port);
});


module.exports = app;