const express = require("express");
const router = express.Router();
const productModel = require("../models/products");
const db = require("../helpers/database");
const fs = require("fs");
const products = require("../helpers/database");





router.post("/create", (req, res) => {
    const product = new productModel(req.body.product, req.body.price, req.body.userID);
    db.saveProduct(product);
    res.status(200).send(true);
    });
    
    // delete product
router.delete("/delete", (req, res) => {
  const product = new productModel(req.body.product, req.body.price, req.body.userID);
  db.deleteProduct(product);
  res.status(200).send(true);
});

// display products
router.get("/get", (req, res) => {
  res.status(200).json(products);
})


  module.exports = router;