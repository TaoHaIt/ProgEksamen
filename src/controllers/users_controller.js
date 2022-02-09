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
router.get("/update", (req, res) => {
  const { userId, email, password } = req.params;
  const userToModifyIndex = db.users.findIndex(user => user.userId === userId);
  Object.assign(db.users[userToModifyIndex], new userModel(userId, email, password));
  db.saveFile("../data/users.json", JSON.stringify(db.users));
  console.log("test");
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