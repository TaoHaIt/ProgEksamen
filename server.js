const express = require("express");
const app = express();




const usercontroller = require("./src/controllers/users_controller");
const productscontroller = require("./src/controllers/products_controller"); 


const PORT = process.env.PORT || 3000; 


app.use(express.static("./src/views"));
app.use(express.json());


app.use("/users", usercontroller); 
app.use("/products", varecontroller); 




app.listen(PORT, ()=>{ 
    console.log(`Server is live on http://localhost:${PORT}`);
    });

    module.exports = app;