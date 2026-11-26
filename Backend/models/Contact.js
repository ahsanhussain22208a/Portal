import mongoose, { model } from "mongoose";
import bcrypt from 'bcryptjs'

const ContactSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true

    },
    message: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }

});


const Contact = model('Contact', ContactSchema);
export default Contact;