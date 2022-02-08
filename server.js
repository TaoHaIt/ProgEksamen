const express = require("express");
const app = express();


// Er den korrekt i mappen? 

const usercontroller = require("./source/controllers/users_controller");
const productscontroller = require("./source/controllers/products_controller"); 


const PORT = process.env.PORT || 3000; 


app.use(express.static("./source/client"));
app.use(express.json());


app.use("/users", usercontroller); 
app.use("/products", varecontroller); 




app.listen(PORT, ()=>{ 
    console.log(`Server is live on http://localhost:${PORT}`);
    });

    module.exports = app;