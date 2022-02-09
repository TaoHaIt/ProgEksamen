document.addEventListener("DOMContentLoaded", (event) => {
    let user = localStorage.getItem("user");
    if (!user) {
      location.href = location.origin + "/login.html";
    } else {
      user = JSON.parse(user);
      // document.getElementById("userIDLabel").innerHTML = user.email;
    }
  // sign out
    document.getElementById("signOutBtn").addEventListener("click", (x, ev) => {
      localStorage.removeItem("user");
      location.reload();
    });
  
  
    // delete user
      document.getElementById("delete").addEventListener("submit", (event) => {
        event.preventDefault();
    
        const user = JSON.parse(localStorage.getItem("user"));
    
        
       fetch("http://localhost:3000/users/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response) {
              localStorage.removeItem("user");
              location.href = "/login.html";
            }
          })
          .catch(() => {
            window.alert("Der skete en fejl");
          });
      });
    });
  
  
  
  
    /* delete product
    document.addEventListener("DOMContentLoaded", (event) => {
      const product = localStorage.getItem("product");
      if (!product) {
        location.href = "/productview.html";
      }
    
  
      
      document.getElementById("deleteProduct").addEventListener("submit", (event) => {
        event.preventDefault();
    
        const product = JSON.parse(localStorage.getItem("product"));
    
        
       fetch("http://localhost:3000/products/delete", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product, ),
        })
          .then((response) => response.json())
          .then((response) => {
            if (response) {
              localStorage.removeItem("product");
              location.href = "/productview.html";
            }
          })
          .catch(() => {
            window.alert("Der skete en fejl");
          });
      });
    });
  */

