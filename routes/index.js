var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get('/', function (req, res) {
  res.render('index');
});

/* router.get("/allusers", async function (req, res) {
  let allusers = await userModel.findOne({username:"Kajal"});
  res.send(allusers)
})
 */
/* router.get('/create', async function (req, res) {
  //async function createUser() {
  const createUser = await userModel.create({
    username: "Kajal",
    name: "Kajal",
    age: 22
  });
  res.send(createUser)
});
 */
module.exports = router;