document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("emailForm").addEventListener("submit", function (event) {
      event.preventDefault();

      
      const emailInput = document.getElementById("emailSubmit"); // Corrected ID
      const emailError = document.getElementById("emailError");

      // Check if the email is valid
      if (!isValidEmail(emailInput.value)) {
        emailError.style.display = "inline";
      } else {
        emailError.style.display = "none";

        // Store the submitted email in sessionStorage
        sessionStorage.setItem("submittedEmail", emailInput.value);
        window.location.href = "./success.html";
      }
    });
  });

// validate email format
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

