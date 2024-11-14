document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent! I'll get back to you soon.");
  });
  
// Toggle the mobile menu visibility
document.getElementById("menuToggle").addEventListener("click", function() {
    const navbarLinks = document.getElementById("navbarLinks");
    navbarLinks.classList.toggle("show");
});
