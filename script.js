// Search Functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.getElementById("searchBox");
  const books = document.querySelectorAll(".book");

  if (searchBox) {
    searchBox.addEventListener("input", () => {
      let query = searchBox.value.toLowerCase();
      books.forEach(book => {
        let title = book.querySelector("h3").innerText.toLowerCase();
        book.style.display = title.includes(query) ? "block" : "none";
      });
    });
  }

  // Login Validation
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const message = document.getElementById("loginMessage");

      if (username === "admin" && password === "1234") {
        message.style.color = "green";
        message.innerText = "✅ Login Successful! Redirecting...";
        setTimeout(() => window.location.href = "index.html", 1500);
      } else {
        message.style.color = "red";
        message.innerText = "❌ Invalid username or password!";
      }
    });
  }
});
