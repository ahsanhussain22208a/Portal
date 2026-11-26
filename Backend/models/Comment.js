import mongoose , {model} from "mongoose";


const CommentSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post',
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    }

});



const Comment = model('Comment' , CommentSchema);
export default Comment;