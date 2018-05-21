const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model("Comment", CommentSchema);