const authService=require("../services/authService");

const register=async(req,res)=>{
    try {
        const userData=req.body;
        //console.log("inside ctrl",userData);
        const user=await authService.registerUser(userData);
        //console.log("after reg servicce",user);
        res.status(201).json({
            message:"User registered successfully",userId:user});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
const login=async(req,res)=>{
    try{
        const userData=req.body;
        //console.log(userData);
        const {token,userId}=await authService.loginUser(userData);
        res.status(200).json({
            message:"User logged in Successfully",
            token,
            userId,
        });
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
module.exports={register,login};