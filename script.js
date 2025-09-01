// 1. Show a welcome message when button is clicked
function showMessage() {
  const messageBox = document.getElementById("message");
  messageBox.innerText = "Thanks for visiting my portfolio! 🌟";
  messageBox.style.color = "green";
  messageBox.style.fontWeight = "bold";
}

// 2. Toggle Dark/Light Mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// 3. Simple form validation
function validateForm(event) {
  event.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("contact-message").value.trim();
  const errorBox = document.getElementById("form-error");

  if (name === "" || email === "" || message === "") {
    errorBox.innerText = "⚠️ Please fill all fields!";
    errorBox.style.color = "red";
  } else {
    errorBox.innerText = "✅ Form submitted successfully!";
    errorBox.style.color = "green";
  }
}

// 4. Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 10,
      behavior: "smooth"
    });
  });
});
