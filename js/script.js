document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const navGroup = document.querySelector('.nav-group');
        const hamburger = document.getElementById('hamburger-menu');
        if (navGroup.classList.contains('active')) {
            navGroup.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Typed.js initialization
const typed = new Typed('.typed-text', {
    strings: ['Web Developer', 'Java Developer', 'Python Developer'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger-menu');
const navGroup = document.querySelector('.nav-group');

hamburger.addEventListener('click', () => {
    navGroup.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Back to Top Button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Show button after scrolling down 300px
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration
    once: true // Whether animation should happen only once - while scrolling down
});
