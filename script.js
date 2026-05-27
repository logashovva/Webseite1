// Smooth Scrolling für Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.md\\:hidden');
    const nav = document.querySelector('nav ul');
    
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            // Toggle mobile menu (Implementierung je nach Anforderung)
            console.log('Mobile menu clicked');
        });
    }

    // Lazy Loading für Bilder
    const images = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        });

        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease-in';
            imageObserver.observe(img);
        });
    }

    // Button Click Handler
    const buttons = document.querySelectorAll('button:not(.md\\:hidden)');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            console.log('Button clicked: ' + this.textContent);
        });
    });
});
