const bcrypt = require('bcryptjs');
const express=require("express");

const jwt=require("jsonwebtoken")
const userModel = require('../Models/user.model');
const userController=express.Router()

userController.post("/signup",async (req,res)=>
{
    const {name,email,password}=req.body
    await bcrypt.genSalt(10,async(err,salt)=>
    {
        await bcrypt.hash(password,salt,(err,hash)=>
        {
                if(err)
                {
                    return res.send("Sign up faild, please try again later ")
                }
                const user=new userModel({name,email,password:hash})

                user.save();
            return res.send(user);
        })
    })
})


userController.post("/login",async (req,res)=>
{
    const {email,password}=req.body


    let user=await userModel.findOne({email})

    if(!user)
    {
        return res.send("Invalid Credentials");
    }

    const hassed_password=user.password
    const userId=user._id

    await bcrypt.compare(password,hassed_password,async(err,result)=>
    {
    
                if(err)
                {
                    return res.send("Sign up faild, please try again later ")
                }
               const token=jwt.sign({email,userId},"secret")
                if(result.length===0){
                    return res.send("Invalid Credentials");
                 }
                 return res.send({message:"Login Successful",token:token});
        
    })
})


module.exports=userController