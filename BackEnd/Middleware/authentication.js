const jwt=require("jsonwebtoken")


const authentication=(req,res,next)=>
{
    if(!req.headers.authorization){
        return res.send("Please login again")
    }
    const usertoken=req.headers.authorization.split(" ")[1]

    jwt.verify(usertoken,"secret",(err,decoded)=>
    {
        if(err)
        {
            return res.send("Please login again")
        }

        req.body.email = decoded.email;
        req.body.user_Id = decoded.userId;

        next()
    })
}

module.exports=authentication