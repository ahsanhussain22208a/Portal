import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken'
import MiddleWare from '../middleware/authmiddleware.js'
import multer from 'multer'

const app = express();
const router = express.Router();

// Multer Code
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../Frontend/src/ProfileImage");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
})
const upload = multer({ storage: storage });

// Route 1 Register API
router.post('/register', upload.single('image'), async (req, res) => {
    const { username, email, password } = req.body;
    const image = req.file ? req.file.filename : null;
    // console.log(username , email , password);
    if (username == "" || email == "" || password == "") {
        return res.status(400).json({ err: "Please Fill Your Fields" })
    }
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(422).json({ err: "Invalid Credientials" });

        }
        else {
            let user = new User({
                username,
                email,
                password,
                image
            })
            await user.save();
            res.status(200).json(user)
        }
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

// Route 2 Login API
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // console.log(username , email , password);
    if (email == "" || password == "") {
        return res.status(400).json({ err: "Please Fill Your Fields" })
    }

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ err: "Invalid Credientials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ err: "Invalid Credientials" });

        }
        const payload = {
            user: {
                id: user.id
            }
        }
        // JWT Token 
        JWT.sign(payload, 'aptech123', { expiresIn: '3d' }, (err, token) => {
            if (err) throw err;
            res.status(200).json({ token });
        })
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

// Route 3 getallusers API
router.get('/getallusers', async (req, res) => {
    try {
        let Users = await User.find();
        res.status(200).json({ Users });
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})

// Route 4 get User Detial API
router.get('/getuser', MiddleWare, async (req, res) => {
    try {
        let UserId = req.userid
        const user = await User.findById(UserId).select('-password');
        res.status(200).json({ user: user });
    }
    catch (error) {
        console.log("Error Here", error);
        res.status(500).json({ err: "Internal Server Error" });
    }

})
export default router;