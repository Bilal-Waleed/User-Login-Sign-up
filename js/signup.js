document.addEventListener("DOMContentLoaded", () => {
    var signupForm = document.getElementById("signupForm");
  
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      var username = document.getElementById("username").value.trim();
      var email = document.getElementById("email").value.trim();
      var password = document.getElementById("password").value.trim();
  
      var users = JSON.parse(localStorage.getItem("users")) || [];
      var userExists = users.some((user) => user.email === email);
  
      if (userExists) {
        alert("Account already exists. Please login.");
        window.location.href = "login.html"; 
      } else {
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInUser", JSON.stringify({ username, email }));
        alert("Your account has been created successfully!");
        window.location.href = "dashboard.html"; 
      }
    });
  
    document.getElementById("goToLogin").addEventListener("click", () => {
      window.location.href = "login.html"; 
    });
  });
  