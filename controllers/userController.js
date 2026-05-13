const getallUsers = (req,res)=>{
    res.send("All Users");
}

const User = require("../models/userModel")

const createNewUser = async (req,res)=>{
    try{
        const user = await User.create(req.body) //Take data from request bodyand save into MongoDB
        res.status(201).json(user) //Sends saved user back as JSON.
        //201 means:Created Successfully

    }catch(error){
        res.status(500).json({
            message : "Failed to create user",
            error : error.message
        })
    }
}

module.exports={getallUsers,createNewUser}