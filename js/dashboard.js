document.addEventListener("DOMContentLoaded", () => {
  var user = JSON.parse(localStorage.getItem("loggedInUser"));
  var dashboardContainer = document.getElementById("dashboardContainer");

  if (!user) {
    window.location.replace("login.html");
    return;
  }

  dashboardContainer.classList.remove("hidden");

  var welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = `Welcome, ${user.username}!`;

  var logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    alert("You have logged out successfully!");
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
});
