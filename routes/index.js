var express = require('express');
var router = express.Router();
//const userModel = require("./users");


router.get('/', function (req, res) {
  res.cookie("age", 22);
  res.render("index");
});

router.get('/read', function (req, res) {
 console.log(req.cookies.age);
 res.send("check")
});

router.get('/delete', function (req, res) {
  res.clearCookie("age")
  res.send("clear ho gyi")
});


module.exports = router;

/*
 router.get("/delete", async function(req,res){
  let deleteduser= await userModel.findOneAndDelete({
    username:"Kajal"
  });
  res.send(deleteduser)
})
  */



/*
 router.get("/allusers", async function (req, res) {
 let allusers = await userModel.find();
 res.send(allusers)
}) 
 */



/*
 router.get("/allusers", async function (req, res) {
  let allusers = await userModel.findOne({username:"Kajal"});
  res.send(allusers)
})
 */



/* 
router.get('/create', async function (req, res) {
  //async function createUser() {
  const createUser = await userModel.create({
    username: "Kajal",
    name: "Kajal",
    age: 22
  });
  res.send(createUser)
});
 */


/* router.get('/', function (req, res) {
 //req.session.koibhinaam= koi bhi value;
  req.session.ban = true;
  res.render('index');
}); */



/* router.get("/checkban", function (req, res) {
  if (req.session.ban === true) {
    res.send("you are banned")
  }
  else{
    res.send("you are not banned")
  }
});

router.get("/removeban", function(req,res){
  req.session.destroy(function(err){
   if (err) throw err;
    res.send("ban removed")
  })
}) */