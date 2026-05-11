const express = require('express');
const router = express.Router();
const user

router.get("/",(req,res)=>{
    res.send("Server Running")
})

module.exports = router;