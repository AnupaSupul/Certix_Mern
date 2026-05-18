const User = require("../models/userModel")
const getallUsers = async(req,res,next)=>{
    try{
        const users = await User.find() //Find all users from MongoDB
        res.status(200).json(users)
        // res.status(200).json(users) //Sends users back as JSON.
        
    }catch(error){
       return next(error) //Pass the error to the next middleware (error handling middleware)
    }
}


const createNewUser = async (req,res,next)=>{
    try{
        const user = await User.create(req.body) //Take data from request bodyand save into MongoDB
        res.status(201).json(user) //Sends saved user back as JSON.
        //201 means:Created Successfully

    }catch(error){
        return next(error) //Pass the error to the next middleware (error handling middleware)
    }
}

const upadateUser = async(req,res,next)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id ,
             req.body ,
            {returnDocument:"after"})            //Find user by ID and update with new data from request body. {new : true} returns the updated user.
            res.status(200).json(user)
    }catch(err){
        return next(err)
    }
}

const deleteUser = async(req,res,next)=>{
    try{
        const user = await User.findByIdAndDelete(
            req.params.id
        ) //Find user by ID and delete from MongoDB

        if(!user){
            return res.status(404).json({
                message : "User not found"
            })

        }
        res.status(200).json({
            message : "User deleted successfully"
        })

    }catch(err){
        return next(err)
    }
}

module.exports={getallUsers,
                createNewUser,
                upadateUser,
                deleteUser}