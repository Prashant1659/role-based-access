const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        content:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true,
    }
)

const Post = mongoose.model('Post',postSchema);
module.exports = Post;