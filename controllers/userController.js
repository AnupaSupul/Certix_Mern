const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


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
        // const user = await User.create(req.body)            //Take data from request bodyand save into MongoDB
        const {name,email,age,password} = req.body
        const hashedPassword = await bcrypt.hash(password,10) //Hash the password using bcrypt with a salt rounds of 10.
        const user = await User.create({
            name,
            email,
            age,
            password : hashedPassword
        })
        
        res.status(201).json(user)                              //Sends saved user back as JSON.
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

const getSingleUser = async(req,res,next)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            return res.status(404).json({
                message : "User not found"
            })
        }else{
            res.status(200).json({
                message: "User found successfully",
                user: user
            })
        }
    }
    catch(err){
        return next(err)
    }
}

const logInUser = async(req,res,next)=>{
    try{
        const {email,password} =req.body
        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                message: "User not found"})
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        )

        if(!isPasswordValid){
            return res.status(401).json({
                message: "Invalid password"
            })
        }else{
            const token = jwt.sign(
                {
                    id : user._id
                },
                process.env.JWT_SECRET,
                {
                    expiresIn : "1h"
                }
            )
            res.status(200).json({
                message: "Login successful",
                token: token
            })

        }

    }catch(error){
        return next(error)
    }
}

module.exports={getallUsers,
                createNewUser,
                upadateUser,
                deleteUser,
                getSingleUser,
                logInUser}