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

  let user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$nickname" }, 0] },
        { $lte: [{ $strLenCP: "$nickname" }, 7] }
      ]
    }
  });
  res.send(user);
});


module.exports = router;

