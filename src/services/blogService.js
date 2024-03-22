const Blog = require("../models/blogModel");

const addBlog=async(blogData)=>{
    try{
        const blog=await Blog.create(blogData);
        return blog;
    }catch(err){
        throw err;
    }
};
const getAllBlogs=async(userId)=>{
    try{
        const blogs=await Blog.find({userId});
        return blogs;
    }catch(err){
        throw err;
    }
};
const updateBlogById=async(blogId,userId,updatedData)=>{
    try{
        const blog=await Blog.findByIdAndUpdate(
        {_id:blogId,userId:userId},
        {$set:updatedData},
        {new:true});
        return blog;
    }catch(err){
        throw err;
    }
};
const deleteBlogById=async(blogId,userId)=>{
    try{
        const blog=await Blog.findByIdAndDelete({_id:blogId,userId:userId});
        return blog;
    }catch(err){
        throw err;
    }
};
module.exports = { addBlog, getAllBlogs, updateBlogById, deleteBlogById };