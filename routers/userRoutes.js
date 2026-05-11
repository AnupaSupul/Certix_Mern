const express = require('express');
const router = express.Router();
const userRouter = require("./userRoutes")

router.get("/",(req,res)=>{
    res.send("Server Running")
})

module.exports = router;