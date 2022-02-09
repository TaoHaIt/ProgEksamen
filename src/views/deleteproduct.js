const opdaterform = document.querySelector("#formDelete");
opdaterform.addEventListener("submit", async(e) => {
    e.preventDefault();
    
let userId = document.getElementById("userID").value;



var remove = {
    userId: userId,
}


await fetch("http://localhost:3000/products/deleteproduct", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(remove),
})
.then(res => res.json())
.then(data => {
    console.log(data);
    window.location.href = "/";
    window.alert("Product removed");
})
});

