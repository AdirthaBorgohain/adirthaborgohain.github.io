document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Theme Toggler (No changes) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const applyTheme = () => {
        if (themeToggle.checked) {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    };
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        themeToggle.checked = true;
    }
    applyTheme();
    themeToggle.addEventListener('change', applyTheme);

    // --- 2. Smooth Scrolling for Top Navigation (No changes) ---
    const navLinks = document.querySelectorAll('.top-nav a[href^="#"], .cta-button[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 3. Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const topNavLinks = document.querySelectorAll('.top-nav a'); 

    const observerOptions = {
        root: null,
        rootMargin: '-50px 0px -35% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const navLink = document.querySelector(`.top-nav a[href="#${id}"]`);
                if (navLink) {
                    topNavLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- 4. GitHub Stars Count ---
    const githubStars = document.querySelectorAll('.github-stars');
    githubStars.forEach(star => {
        const repo = star.dataset.repo;
        if (repo) {
            fetch(`https://api.github.com/repos/${repo}`)
                .then(response => response.json())
                .then(data => {
                    star.innerHTML = `<i class="fa-solid fa-star"></i> ${data.stargazers_count}`;
                })
                .catch(error => console.error('Error fetching GitHub stars:', error));
        }
    });
});