const router = require('express').Router();
const Post = require('../models/Post');
const multer = require('multer');
const upload = multer({dest: './public/images/posts'});

router.post('/new', upload.single("picture"), (req, res) =>{
    console.log(req.file);
    res.json(req.file)
   /*Post.create(req.body)
       .then(post=>{
           res.json(post);
       }).catch(e=>{
           res.send(e);
   })*/
});

router.get('/', (req, res)=>{
   Post.find()
       .then(posts=>{
           res.json(posts);
       })
       .catch(e=>{
           console.log(e);
           res.send("No funco papud")
       })
});

module.exports = router;