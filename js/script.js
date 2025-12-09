// // Get the button
const backToTopBtn = document.getElementById('myBtn');

// When user scrolls, show/hide button
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Scroll to top when clicked
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mainMenu = document.getElementById("main-menu");

  menuToggle.addEventListener("click", () => {
    mainMenu.classList.toggle("show");
    // change button text/icon
    if (mainMenu.classList.contains("show")) {
      menuToggle.textContent = "x";   // close icon
    } else {
      menuToggle.textContent = "☰";   // menu icon
    }
  });
});