document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login form");
  const emailInput = document.querySelector("input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if email and password are not empty
    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
      emailInput.focus();
      return;
    }

    if (passwordInput.value.trim() === "") {
      alert("Please enter your password.");
      passwordInput.focus();
      return;
    }

    // If both fields are filled, you can proceed with form submission
    // For now, I'm just alerting to indicate that validation is successful
    alert("Validation successful. Logging in...");
  });
});
