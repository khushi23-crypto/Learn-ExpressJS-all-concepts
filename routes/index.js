var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");


router.get('/', function (req, res) {
  res.render("index");
});

router.get('/createuser', async function (req, res) {
  let createduser = await userModel.create({
    username: "kajalsaini",
    password: "kajal",
    posts: [],
    email: "kajal44@email.com",
    fullname: "kajalsaini"
  })
  res.send(createduser);
});

router.get('/createpost', async function (req, res) {
  let createdpost = await postModel.create({
    postText: "Hello everyone"
  })
  res.send(createdpost);
});
module.exports = router;






// require passport
/* const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

// set up passport local strategy
passport.use(new localStrategy(userModel.authenticate()));
 */


/* router.get('/profile',isLoggedIn ,function (req, res) {
  res.render('profile');
});

 router.post('/register', function(req,res){
  var userdata = new userModel({
  username: req.body.username,
  secret: req.body.secret
});

 //create user account
 userModel.register(userdata,req.body.password)
 .then(function(registereduser){
  //login account and go to /profile route
  passport.authenticate("local")(req,res,function(){
    res.redirect("/profile");
  })
 })
});
router.post('/login', passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/",

}),function(req,res){})

router.get("/logout",function(req,res){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect("/");
  })
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}
 */

