const commentService=require("../services/commentService");

const addComment=async(req,res)=>{
    try{
        const { text } = req.body;
        const userId = req.user.id;
        const blogComment = await commentService.addComment({
            blogId: req.params.id,
          userId,
          text,
        });
       // console.log("added comment ",blogComment);
        res.status(201).json(blogComment);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const getAllComments=async(req,res)=>{
    try{
    const {blogId}=req.params;
      // console.log("getallcomments blogID",blogId);
        const comments=await commentService.getAllComments(blogId);
        res.status(200).json(comments);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const updateCommentById=async(req,res)=>{
    try{
        const {blogId,id}=req.params;
        const userId=req.user.id;
        const updateData=req.body;
      //  console.log("update controller ",blogId,id);
        const comment=await commentService.updateCommentById(
            blogId,id,userId,updateData
        );
        if(!comment){
            return res.status(404).json({message:"comment not found"});
        }
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

const deleteCommentById=async(req,res)=>{
    try{
        const {blogId,id}=req.params;
        const userId=req.user.id;
        const comment=await commentService.deleteCommentById(
            blogId,id,userId
        );
        if(!comment){
            return res.status(404).json({message:"Comment not found"});
        }
        res.status(200).json(comment);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports={addComment,getAllComments,updateCommentById,deleteCommentById};