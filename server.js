const express = require("express");
const app = express();

// Controllers
//users
const userController = require("./src/controllers/user-controller");

// products
const userProducts = require("./src/controllers/products-controller");


const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("./src/views"));
JSON
app.use(express.json());

// Routes
app.use("/users", userController);
// route til marketplace, hvor brugere kan uploade varer
app.use("/products", userProducts);

// Start server
app.listen(PORT, console.log(`Server is live on http://localhost:${PORT}`));
 

module.exports = app;