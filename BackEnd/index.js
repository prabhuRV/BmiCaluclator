require('dotenv').config()

const express=require("express")

const app=express()
const cors=require("cors")
const connection = require('./Configuration/config')
app.use(express.json())

app.get("/",(req,res)=>
{
   res.send("Well come to home") 
})

app.listen(process.env.PORT,async()=>
{
    try {
        await connection
        console.log('db connected')
    } catch (error) {
        console.log("error in connecting db")
        console.log(error)
    }
})