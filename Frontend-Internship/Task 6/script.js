document.getElementById("diaryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset all error messages
  document.getElementById("errorBox").style.display = "none";
  document.getElementById("nameError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("messageError").style.display = "none";

  let hasError = false;
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Validate name
  if (name === "") {
    document.getElementById("nameError").textContent = "Hey! You forgot to enter your name 📝";
    document.getElementById("nameError").style.display = "block";
    hasError = true;
  }

  // Validate email
  if (email === "") {
    document.getElementById("emailError").textContent = "Oops! Email is required ✉️";
    document.getElementById("emailError").style.display = "block";
    hasError = true;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Hmm... that doesn't look like a valid email 📮";
    document.getElementById("emailError").style.display = "block";
    hasError = true;
  }

  // Validate message
  if (message === "") {
    document.getElementById("messageError").textContent = "Don’t leave me blank 😢 Please type your message.";
    document.getElementById("messageError").style.display = "block";
    hasError = true;
  }

  // Show top error box
  if (hasError) {
    document.getElementById("errorBox").textContent = "No worries 😄 I'm here to help you. Try again!";
    document.getElementById("errorBox").style.display = "block";
  } else {
    alert("Form submitted successfully! 💌");
    // Optionally reset the form:
    // document.getElementById("diaryForm").reset();
  }
});
