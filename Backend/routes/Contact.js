import express from 'express'
import Contact from '../models/Contact.js';
const app = express();
const router = express.Router();
router.post('/feedback', async (req, res) => {
    const { fname, lname, email, message } = req.body;
    if (fname == "" || lname == "" || email == "" || message == "") {
        return res.status(400).json({ err: "Please Fill Your Fields" })
    }
    try {
        const newContact = new Contact({
            fname,
            lname,
            email,
            message
        })
        await newContact.save();
        res.status(200).json({ newContact })
    } catch (error) {
        res.status(500).json({ err: "Internal Server Error" })
    }
})
export default router


