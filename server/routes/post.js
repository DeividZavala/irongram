const router = require('express').Router();
const Post = require('../models/Post');
const multer = require('multer');
const upload = multer({dest: './public/images/posts'});
const Comment = require('../models/Comment');

function isAuthenticated(req, res, next){
    if(req.isAuthenticated()) return next();
    res.status(403);
    res.send("Epape epale perro que hace aqui");
}

router.post('/new', upload.single("picture"), (req, res) =>{
    req.body.picture = `${req.protocol}://${req.headers.host}/images/posts/`+req.file.filename;
   Post.create(req.body)
       .then(post=>{
           res.json(post);
       }).catch(e=>{
           res.send(e);
   })
});

router.get('/', (req, res)=>{
   Post.find()
       .populate("user", "name")
       .populate("comments")
       .then(posts=>{
           res.json(posts);
       })
       .catch(e=>{
           console.log(e);
           res.send("No funco papud")
       })
});

router.post('/comment/:id/new',isAuthenticated, (req,res) => {
    req.body.post = req.params.id;
    Comment.create(req.body)
        .then(comment=>{
            Post.findByIdAndUpdate(req.params.id, {$push: {comments: comment._id}}, {new: true})
                .then(post=>{
                    res.json(comment);
                })

        })
});

module.exports = router;