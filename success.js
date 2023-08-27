document.addEventListener("DOMContentLoaded", function() {
    const submittedEmail = document.getElementById("submittedEmail");
  
    // Retrieve and display the submitted email from sessionStorage
    const email = sessionStorage.getItem("submittedEmail");
    if (email) {
      submittedEmail.textContent = email;
    }
  });
  