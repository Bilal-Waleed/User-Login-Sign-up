document.addEventListener("DOMContentLoaded", () => {
    var loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      var email = document.getElementById("email").value.trim();
      var password = document.getElementById("password").value.trim();
  
      var users = JSON.parse(localStorage.getItem("users")) || [];
      var loggedInUser = users.find(
        (user) => user.email === email && user.password === password
      );
  
      if (loggedInUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        alert("You have logged in successfully!");
        window.location.href = "dashboard.html"; 
      } else {
        alert("Invalid credentials. Please try again or sign up.");
      }
    });
  
    document.getElementById("goToSignup").addEventListener("click", () => {
      window.location.href = "signup.html"; 
    });
  });
  