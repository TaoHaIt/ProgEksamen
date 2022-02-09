const express = require("express");
const router = express.Router();
const productModel = require("../models/products");
const db = require("../helpers/database");
const fs = require("fs");
const products = require("../helpers/database");





router.post("/create", (req, res) => {
    const product = new productModel(req.body.product, req.body.price, req.body.productID);
    db.saveProduct(product);
    res.status(200).send(true);
    });
    
    // delete product
    router.delete("/deleteproduct", (req, res) => {

      const product = new productModel (req.body.product, req.body.price, req.body.productID);
    
      database.deleteProduct(product);
      res.status(200).send("Product has been removed");
    
    });


// Router for at opdatere vare
router.put("/updateproduct", (req, res) => {
  let data = JSON.parse(fs.readFileSync('data/productdata.json'))

  for (let i = 0; i < data.length; i++) {
      if(data[i].productID == req.body.productID) {
          data[i].product = req.body.product;
          data[i].price = req.body.price;
          

          fs.writeFile('data/productdata.json', JSON.stringify(data, null, 4), err => {
              if(err) res.send(err);
              res.send(data);
          });
      }
  }
});




// display products
router.get("/get", (req, res) => {
  res.status(200).json(products);
})


  module.exports = router;