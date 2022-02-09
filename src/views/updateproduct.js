const updateform = document.querySelector("#updateform");
updateform.addEventListener("submit", async(e) => {
    e.preventDefault();
    

let product = document.getElementById("updatepro").value;
let price = document.getElementById("price").value;
let productID = document.getElementById("productID").value;

var update = {
    
    product: product,
    price: price,
    productID: productID
}

await fetch("http://localhost:3000/products/updateproducts", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
})
.then(res => res.json())
.then(data => {
    console.log(data);
    window.location.href = "/";
    window.alert("Varen er nu opdateret");
})
});