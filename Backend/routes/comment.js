import express from "express";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";
import MiddleWare from '../middleware/authmiddleware.js';

const router = express.Router();

// Route 1: Add Comment
router.post('/add_comment/:id', MiddleWare, async (req, res) => {

    const { description } = req.body;
    const { id } = req.params;

    try {
        if (!description || description.trim() === "") {
            return res.status(400).json({ err: "Comment must be required" });
        }

        const comment = new Comment({
            description,
            user: req.userid,
            post: id
        });

        await comment.save();

        await Post.updateOne(
            { _id: id },
            { $push: { comments: comment._id } }
        );

        res.status(201).json(comment);

    } catch (error) {
        console.log("Error here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }
});


// Route 2: Get All Comments
router.get('/get_all_comment_post/:id', MiddleWare, async (req, res) => {

    try {
        const { id } = req.params;

        const comments = await Comment.find({ post: id })
            .populate('user', 'username image')
            .sort({ date: -1 });

        res.status(200).json(comments);

    } catch (error) {
        console.log("Error here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }
});

export default router;