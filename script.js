document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            // Toggle hamburger to X (optional simple text change or icon swap)
            mobileMenuBtn.innerHTML = mobileMenu.classList.contains('hidden') ? '&#9776;' : '&times;';
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-brand-dark', 'shadow-md');
            navbar.classList.remove('bg-transparent');
        } else {
            // Only remove if we are on the homepage (which usually starts transparent)
            // But for consistency across pages, let's check a data attribute or class
            // For now, simpler: only the index page has a transparent header initially.
            // Other pages start with bg-brand-dark.
            // Let's detecting if we are on the index page by checking if the header has bg-transparent initially or based on URL.
            
            // Actually, in my HTML:
            // index.html starts with bg-transparent
            // others start with bg-brand-dark
            
            // So if I'm on index.html:
            if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                navbar.classList.remove('bg-brand-dark', 'shadow-md');
                navbar.classList.add('bg-transparent');
            }
        }
    });

    // --- Scroll Animations (Fade In) ---
    // Select all elements with class 'fade-in-up' (I need to add this class to HTML elements if I want to use it)
    // Or just animate sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to product cards and feature items
    const animatedElements = document.querySelectorAll('.group, .prose p, h2');
    animatedElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });

});
