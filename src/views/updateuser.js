const updateformuser = document.querySelector("#formUpdateUser");
updateformuser.addEventListener("submit", async (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    var update = {
        email: email,
        password: password
    }

    


    await fetch("http://localhost:3000/users/updateuser", {
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
        window.alert("Password changed");
    })
    .cath(err => {
        window.alert("A mistake happened", err);
    });
    
});