const jwt=require("jsonwebtoken");

const authToken=(req,res,next)=>{
    const authHeader=req.headers["authorization"];
    const token=authHeader && authHeader.split(" ")[1];
    if(token==null) return res.sendStatus(401);
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403); //forbidden
        req.user=user;
        console.log("User is in middleware",user);
        next();
    });
}
module.exports=authToken;