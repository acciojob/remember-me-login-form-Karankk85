document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberCheckbox = document.getElementById("checkbox");
  const existingUserButton = document.getElementById("existing");
  const form = document.getElementById("loginForm");

  // Show "Login as existing user" button if credentials exist
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingUserButton.style.display = "block";
  }

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (rememberCheckbox.checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingUserButton.style.display = "block";
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingUserButton.style.display = "none";
    }
  });

  // Handle existing user login
  existingUserButton.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
});
