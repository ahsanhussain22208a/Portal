import mongoose, { model } from "mongoose";


const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    dislikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    }],

    date: {
        type: Date,
        default: Date.now
    }

});



const Post = model('Post', PostSchema);
export default Post;