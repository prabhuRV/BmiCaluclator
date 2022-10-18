const express=require("express");
const bmiModel = require("../Models/bmicaluctor.model");

const bmiController=express.Router()


bmiController.post("/create",async (req,res)=>
{
    const {height,weight,user_Id}=req.body
 let bmi=weight/height
console.log(bmi)
    const new_bmis=new bmiModel({
        height,weight,user_Id:user_Id
    })
   // await new_bmis.save()

    res.send({"massage":"Note new_bmis",new_bmis})
}
)



module.exports=bmiController