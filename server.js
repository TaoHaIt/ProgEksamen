const express = require("express"); // Første step 
const app = express();

// Controllers
//users
const userController = require("./src/controllers/user-controller"); // Filerne kobles sammen her

// products
const userProducts = require("./src/controllers/products-controller"); // Filerne kobles sammen her


const PORT = process.env.PORT || 3000; // Hvilke port skal serveren køre på

// Middleware// Hvad der sker før vi kører noget
app.use(express.static("./src/views"));
JSON
app.use(express.json());

// Routes, endpoints
app.use("/users", userController);
// route til marketplace, hvor brugere kan uploade varer
app.use("/products", userProducts);

// Start server
app.listen(PORT, console.log(`Server is live on http://localhost:${PORT}`));
 

module.exports = app; // Eksporterer