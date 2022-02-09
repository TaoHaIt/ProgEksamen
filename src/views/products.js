document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
      console.log("test")
      const product = document.getElementById("uploadproduct").value;
      const price = document.getElementById("productPrice").value;
      const userID = document.getElementById("productID").value;
  
      const newProduct = {
        product: product,
        price: price,
        userID: userID,
      };
  
      fetch("http://localhost:3000/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/products.html";
          }
        })
        .catch(() => {
          window.alert("Product upload failed");
        });
    });
  });
