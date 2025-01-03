//your JS code here. If required.
// script.js

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Clear previous error messages
  document.querySelectorAll(".error-message").forEach(function(error) {
    error.style.display = "none";
  });

  let isValid = true;

  // Full Name Validation
  const fullName = document.getElementById("full-name");
  if (!fullName.value.trim()) {
    document.getElementById("name-error").textContent = "Full Name is required";
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  }

  // Email Validation
  const email = document.getElementById("email");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.value.trim() || !emailPattern.test(email.value)) {
    document.getElementById("email-error").textContent = "Valid Email Address is required";
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  // Phone Validation (optional, but valid format)
  const phone = document.getElementById("phone");
  const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  if (phone.value.trim() && !phonePattern.test(phone.value)) {
    document.getElementById("phone-error").textContent = "Invalid Phone Number format (123-456-7890)";
    document.getElementById("phone-error").style.display = "block";
    isValid = false;
  }

  // Message Validation
  const message = document.getElementById("message");
  if (!message.value.trim() || message.value.length < 100) {
    document.getElementById("message-error").textContent = "Message must be at least 100 characters long";
    document.getElementById("message-error").style.display = "block";
    isValid = false;
  }

  // If form is valid, simulate form submission
  if (isValid) {
    setTimeout(() => {
      alert("Form submitted successfully!");
      document.getElementById("contact-form").reset();
    }, 3000);
  }
});
