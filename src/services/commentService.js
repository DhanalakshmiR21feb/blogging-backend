const Comment = require("../models/commentModel");

const addComment = async (commentData) => {
  try {
   // console.log("inside comment service",commentData)
    const comment = await Comment.create(commentData);
    return comment;
  } catch (err) {
    throw err;
  }
};
const getAllComments = async (blogId) => {
  try {
   // console.log("comment service getAllComments ",blogId);
    const comments = await Comment.find({blogId:blogId});
    return comments;
  } catch (err) {
    throw err;
  }
};
const updateCommentById = async (blogId, commentId, userId, updateData) => {
  try {
   // console.log("comment service ",blogId, commentId, userId, updateData);
    const updatedData = await Comment.findOneAndUpdate(
      { _id: commentId, blogId: blogId, userId: userId },
      { $set: updateData },
      { new: true }
    );
    return updatedData;
  } catch (err) {
    throw err;
  }
};
const deleteCommentById = async (blogId, commentId, userId) => {
  try {
    const comment = await Comment.findOneAndDelete({
      _id: commentId,
      blogId: blogId,
      userId: userId,
    });
    return comment;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  addComment,
  getAllComments,
  updateCommentById,
  deleteCommentById,
};
