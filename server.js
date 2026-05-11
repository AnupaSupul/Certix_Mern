const express = require("express");
const app = express();
const port = 3000;
const userRoutes= require("./routers/userRoutes")


app.get("/",(req,res)=>{
    res.send("Server Running")
});

app.use("/api/users",userRoutes);

app. listen(port,()=>{
    console.log("Server is running on port "+port);
});


module.exports = app;