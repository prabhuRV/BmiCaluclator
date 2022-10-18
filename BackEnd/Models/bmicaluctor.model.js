const mongoose=require("mongoose")

const bmiSchema=new mongoose.Schema({
    user_Id:{ type: String, required: true },
    weight:{ type: String, required: true },
    height:{ type: String, required: true },
    bmi:{ type: String, required: true },
})
const bmiModel=mongoose.model("bmi",bmiSchema);
module.exports=bmiModel