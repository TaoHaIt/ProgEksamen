var fs = require("fs");
const { parse } = require("path");

const ABSOLUTE_PATH = __dirname + "/../../data";
// Login -system
const userToJson = "/userdata.json"; 
// upload produkt
const productToJson = "/productdata.json";


// database
class DB {
  constructor() {
    // brugere
    this.users = this.openFile(userToJson);
    // produkter
    this.products = this.openFile(productToJson);

  }

  


  // Save file
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

  // Open file
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }

  // database user register, login, delete
  saveUser(user) {
    this.users.push(user);
    this.saveFile(userToJson, JSON.stringify(this.users));
  }

  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(userToJson, JSON.stringify(this.users));
  }

  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }

  // database prodcut register, login, delete
  // save product 
  saveProduct(product) {
    this.products.push(product);
    this.saveFile(productToJson, JSON.stringify(this.products));
  }
// delete product
  deleteProduct(product) {
    this.products = this.products.filter((x) => x.userID != product.userID);
    this.saveFile(productToJson, JSON.stringify(this.products));
  }

  //Display all products
  allProducts(product) {
    return productToJson;
  }
}


module.exports = new DB();