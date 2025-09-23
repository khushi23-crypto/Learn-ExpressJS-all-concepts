var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get('/', function (req, res) {
  res.render("index");
});

router.get("/create", async function (req, res) {
  const userdata = await userModel.create({
    username: "kajalji",
    nickname: "hehehehe",
    description: "she is the engineer",
    categories: ['cutie', 'kind', 'sweetest', 'jaan'],
  })
  res.send(userdata);
})

/* ^ - shuruaat hai
^kajal$
$ - end hai */


router.get("/find", async function (req, res) {
  //new RegExp(Search,flags)
  var regex = new RegExp('^Kajal$', 'i')   //i means case insensitive
  let user = await userModel.find({ username: regex });
  res.send(user);
})

module.exports = router;

