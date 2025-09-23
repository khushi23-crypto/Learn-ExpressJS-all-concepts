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
  var date1=new Date ('2025-09-23');
  var date2=new Date ('2025-09-24');
  let user =await userModel.find({datecreated: {$gte: date1, $lt: date2}});
  res.send(user);
});


module.exports = router;

