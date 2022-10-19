const express=require("express");
const bmiModel = require("../Models/bmicaluctor.model");

const bmiController=express.Router()


bmiController.post("/create",async (req,res)=>
{
    const {height,weight,user_Id}=req.body
 let bmi=(weight/height).toFixed(2)
console.log(bmi)
    const new_bmis=new bmiModel({
        height,weight,user_Id:user_Id,bmi:bmi
    })
   await new_bmis.save()

    res.send({"massage":"Note new_bmis",new_bmis})
}
)

bmiController.get("/", async (req, res) => {
    const {user_Id} = req.body
  //  console.log(user_Id)
    const data = await bmiModel.find({user_Id})
    res.send({"massage":"Result Massage",data:data})
 })

module.exports=bmiController