var express = require('express');
var router = express.Router();
//const userModel = require("./users");


router.get('/', function (req, res) {

  res.render("index");
});

router.get('/failed', function (req, res) {
  req.flash("age",12)
  res.send("data set ho gyi")
});

router.get('/check', function (req, res) {
  console.log(req.flash("age"))
  res.send("check");
});

module.exports = router;
