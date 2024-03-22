const express=require("express");
const router=express.Router();
const blogController=require("../controllers/blogController");
const commentController=require("../controllers/commentController")
const authTokenMiddleware=require("../middleware/authToken");
//BLOGS
//create the blog
router.post("/",authTokenMiddleware,blogController.addBlog);

//get all blogs og User
router.get("/",authTokenMiddleware,blogController.getAllBlogs);

//update the blog by ID
router.put("/",authTokenMiddleware,blogController.updateBlogById);

//delete the blog by ID
router.delete("/:id",authTokenMiddleware,blogController.deleteBlogById);

//COMMENTS
//Add a comment to blog
router.post("/:id/comments",authTokenMiddleware,commentController.addComment);

//get all comments of blog
router.get("/:blogId/comments",authTokenMiddleware,commentController.getAllComments);

//update the comment by ID
router.put("/:blogId/comments/:id",authTokenMiddleware,commentController.updateCommentById);

//delete the comment by ID
router.delete("/:blogId/comments/:id",authTokenMiddleware,commentController.deleteCommentById);

module.exports=router;