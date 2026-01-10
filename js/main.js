// ====================
// Main JavaScript
// Midnight Gallery
// ====================

// ====================
// Loading Animation
// ====================

const loadingScreen = document.getElementById('loadingScreen');
const loadAnimateElements = document.querySelectorAll('.load-animate');

// Minimum time to show loader (in ms) for a polished experience
const MIN_LOADER_TIME = 2200;
const loaderStartTime = Date.now();

// Function to hide loader and reveal page content
function revealPage() {
    const elapsedTime = Date.now() - loaderStartTime;
    const remainingTime = Math.max(0, MIN_LOADER_TIME - elapsedTime);

    setTimeout(() => {
        // Start the curtain reveal animation
        loadingScreen.classList.add('loaded');

        // Animate in page elements with staggered delays
        loadAnimateElements.forEach((el, index) => {
            const delay = parseInt(el.dataset.loadDelay || 0) + (index * 100);
            setTimeout(() => {
                el.classList.add('loaded');
            }, delay + 400); // Add 400ms to wait for curtain to open
        });

        // Completely hide loader after animations complete
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1200);
    }, remainingTime);
}

// Check if page is already loaded
if (document.readyState === 'complete') {
    revealPage();
} else {
    // Wait for all resources to load
    window.addEventListener('load', revealPage);
}

// ====================
// Navigation
// ====================

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.mobile-menu .nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ====================
// Smooth Scrolling
// ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ====================
// Scroll Reveal
// ====================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// ====================
// Form Handling
// ====================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show success message
        showNotification('Message sent successfully! We\'ll be in touch soon.', 'success');

        // Reset form
        contactForm.reset();
    });
}

// ====================
// Notification System
// ====================

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const colors = {
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        warning: 'var(--color-warning)',
        info: 'var(--accent-gold)'
    };

    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        padding: '16px 24px',
        background: 'var(--neutral-900)',
        color: 'var(--text-primary)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-2xl)',
        border: `1px solid ${colors[type]}`,
        zIndex: '10000',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: '500',
        maxWidth: '400px',
        transform: 'translateY(100px)',
        opacity: '0',
        transition: 'all 0.3s cubic-bezier(0, 0, 0.2, 1)'
    });

    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    });

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ====================
// Keyboard Navigation
// ====================

document.addEventListener('keydown', (e) => {
    // Escape closes mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ====================
// Console Welcome
// ====================

console.log('%cMike M Photography', 'font-size: 24px; color: #C9A962; font-weight: bold; font-family: Georgia, serif;');
console.log('%cCapturing moments in time', 'font-size: 14px; color: #A1A1AA;');
