//CREATE USERS DATA

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

//READ ALL USERS DATA

/*
 router.get("/allusers", async function (req, res) {
 let allusers = await userModel.find();
 res.send(allusers)
})
 */

//FIND ONE USERNAME FROM ALL USERS

/*
 router.get("/allusers", async function (req, res) {
  let allusers = await userModel.findOne({username:"Kajal"});
  res.send(allusers)
})
 */


//FIND ONE AND DELETE USERNAME OR ANYTHING

/*
 router.get("/delete", async function(req,res){
  let deleteduser= await userModel.findOneAndDelete({
    username:"Kajal"
  });
  res.send(deleteduser)
})
  */


//CREATE ,CHECK, DELETE SESSION

/* router.get('/', function (req, res) {
 //req.session.koibhinaam= koi bhi value;
  req.session.ban = true;
  res.render('index');
}); */


/*
 router.get("/checkban", function (req, res) {
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
})
  */


//CREATE , READ , DELETE COOKIE
/*
router.get('/', function (req, res) {
res.cookie("age", 22);
res.render("index");
});

//READ COOKIE

router.get('/read', function (req, res) {
console.log(req.cookies.age);
res.send("check")
});

//DELETE COOKIE

router.get('/delete', function (req, res) {
res.clearCookie("age")
res.send("clear ho gyi")
});
*/


//USE FLASH-CONNECT

/* router.get('/failed', function (req, res) {
  req.flash("age",12)
  res.send("data set ho gyi")
});

router.get('/check', function (req, res) {
  console.log(req.flash("age"))
  res.send("check");
});
 */

//CASE IN SENSITIVE

/* router.get("/find", async function (req, res) {
  //new RegExp(Search,flags)
  var regex = new RegExp('^Kajal$', 'i')   //i means case insensitive
  let user = await userModel.find({ username: regex });
  res.send(user);
})
 */