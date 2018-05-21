const router = require('express').Router();
const passport = require('passport');
const User = require('../models/User');

router.post('/login', passport.authenticate('local'), (req,res, next)=>{
    res.json(req.user);
});

router.post('/signup', (req,res) => {
    User.register(req.body, req.body.password, (err, user) => {
        if(err) return res.json(err);
        res.json(user);
    })
});

router.get('/logout', (req,res) => {
    req.logout();
    res.status(200);
    res.send("Adios papud");
});

module.exports = router;