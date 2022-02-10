document.addEventListener("DOMContentLoaded", (event) => {
    const user = localStorage.getItem("user");
    if (user) {
      location.href = "/";
    }
  
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const user = {
        email: email,
        password: password,
      };
  
      fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            // Gemmer login, og starter bruger session
            localStorage.setItem("user", JSON.stringify(user));
            location.href = "/";
          } else {
            window.alert("Email/password not found");
          }
        })
        .catch(() => {
          window.alert("A mistake happened");
        });
    });
});