const toggleNav = document.getElementById("toggle");
const navLinks = document.getElementById("nav-links");

toggleNav.addEventListener("click", () => {
  navLinks.classList.toggle("show-nav-links");
});