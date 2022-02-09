const express = require("express");
const router = express.Router();
const userModel = require("../models/users");
const db = require("../helpers/database");


// create a new user
router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password, req.body.userId);
  db.saveUser(user);
  res.status(200).send(true);
});

// delete a user
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password, req.body.userId);
  db.deleteUser(user);
  res.status(200).send(true);
});

// update a userId

router.put("/updateuser", (req, res) => {
  let data = JSON.parse(fs.readFileSync('data/userdata.json'))
console.log(req.body);
  for (let i = 0; i < data.length; i++) {
      if(data[i].email == req.body.email) {
          data[i].password = req.body.password;

          fs.writeFile('data/userdata.json', JSON.stringify(data, null, 3), err => {
              if(err) res.send(err);
              res.send(data);
          });
      }
  }
});

// user login 
router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password, req.body.userId);
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(401).send(false);
    }
  } else {
    res.status(404).send(false);
  }
});

module.exports = router;