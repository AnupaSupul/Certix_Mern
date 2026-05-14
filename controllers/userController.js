const User = require("../models/userModel")
const getallUsers = async(req,res)=>{
    try{
        const users = await User.find() //Find all users from MongoDB
        res.status(200).json(users) //Sends users back as JSON.
        
    }catch(error){
        res.status(500).json({
            message: "Failed to fetch users",
            error : error.message
        })
    }
}


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

const upadateUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id ,
             req.body ,
            {new : true})            //Find user by ID and update with new data from request body. {new : true} returns the updated user.
            res.status(200).json(user)
    }catch(err){
        res.status(500).json({
            message : "Failed to update user",
            err : err.message
        })
    }
}

const deleteUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(
            req.params.id
        ) //Find user by ID and delete from MongoDB
        res.status(200).json("User deleted successfully")

    }catch(err){
        res.status(500).json({
            message : "Failed to delete user",
            err : err.message
        })
    }
}

module.exports={getallUsers,
                createNewUser,
                upadateUser,
                deleteUser}