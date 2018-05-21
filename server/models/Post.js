const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
   picture: String,
   user: {
       type: Schema.Types.ObjectId,
       ref: "User"
   },
    description: String,
    likes: [{
       type: Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Post", PostSchema);