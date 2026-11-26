import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken'
import MiddleWare from '../middleware/authmiddleware.js'
import Post from '../models/Post.js';
import multer from 'multer';
const app = express();
const router = express.Router();

// Multer Code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
})
const upload = multer({ storage: storage });

// Add Post Login Required
router.post('/Add_Post', upload.single('image'), MiddleWare, async (req, res) => {
    const { title, description, region, category } = req.body;
        const image = req.file ? req.file.filename : null;
    // console.log(username , email , password);

    try {
        if (title == "" || description == "" || region == "" || category == "") {
            return res.status(400).json({ err: "Please Fill Your Fields" })
        }
        let UserId = req.userid;
        const user = await User.findById(UserId);
        if (!user) {
            return res.status(400).json({ err: "Invalid User ID" })
        }
        else {
            let post = new Post({
                user: UserId,
                title,  
                description,
                region,
                category,
                image
            })
            await post.save();
            res.status(200).json(post)
        }
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

// Get All Posts Login Required
router.get('/get_All_posts', async (req, res) => {
    try {
        let postUser = await Post.find();
        res.status(200).json({ postUser });
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

// Add Like Login Required
router.put('/Add_Like/:id', MiddleWare, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.likes.includes(req.userid)) {
            return res.status(400).json({ err: "ALready liked by User" })
        }
        post.likes.push(req.userid)
        await post.save();
        res.status(200).json(post);
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})


// Add disLike Login Required
router.put('/Add_disLike/:id', MiddleWare, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.dislikes.includes(req.userid)) {
            return res.status(400).json({ err: "ALready disliked by User" })
        }
        post.dislikes.push(req.userid)
        await post.save();
        res.status(200).json(post);
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

// Get Post by Userid Login Required
router.get('/get_Post/:id', MiddleWare , async (req, res) => {
    try {
        const {id} = req.params;
        const posts = await Post.find({user : id})
        res.status(200).json(posts);
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

export default router;