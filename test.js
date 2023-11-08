// JavaScript for the Homepage

// Example of a simple function for handling a click event on the "Sign Up" button
const signUpButton = document.querySelector('a[href="#"]');
signUpButton.addEventListener('click', () => {
    alert('Redirecting to Sign Up page...');
    // You can add further logic here to redirect to the sign-up page
});

// Example of a function for toggling the navigation menu for smaller screens
const navToggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
