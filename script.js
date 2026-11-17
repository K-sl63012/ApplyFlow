
// Get the contact form
const contactForm = document.getElementById("contactForm");

// Get the message area
const formMessage = document.getElementById("formMessage");

// Handle form submission
contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Display success message
    formMessage.style.color = "green";
    formMessage.textContent =
        "Thank you, " + name + "! Your demo request has been received.";

    // Clear the form
    contactForm.reset();
});


// Welcome message in browser console
console.log("Welcome to ApplyFlow!");
console.log("Your career journey starts here.");


// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
