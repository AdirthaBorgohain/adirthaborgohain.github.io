document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme Toggler ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set theme based on checkbox state
    const applyTheme = () => {
        if (themeToggle.checked) {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        themeToggle.checked = true;
    }
    
    // Apply theme on initial load
    applyTheme();

    // Add event listener for changes
    themeToggle.addEventListener('change', applyTheme);


    // --- 2. Smooth Scrolling for Top Navigation ---
    const navLinks = document.querySelectorAll('.top-nav a[href^="#"], .cta-button[href^="#"]'); // Include CTA button
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate offset for the fixed header bar if needed in the future
                // For now, block: 'start' is fine.
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    // --- 3. Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    // CHANGED: Selector updated from .side-nav to .top-nav
    const topNavLinks = document.querySelectorAll('.top-nav a'); 

    const observerOptions = {
        root: null,
        rootMargin: '-50px 0px -50% 0px', // Adjusted for top nav
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.top-nav a[href="#${id}"]`);
            
            if (entry.isIntersecting && navLink) {
                topNavLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});