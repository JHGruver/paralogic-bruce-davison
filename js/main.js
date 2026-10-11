// ====================
// Main JavaScript
// Midnight Gallery
// ====================

// ====================
// Loading Animation
// ====================

const loadingScreen = document.getElementById('loadingScreen');
const loadAnimateElements = document.querySelectorAll('.load-animate');

// Check if we should skip the loading animation
// Skip if user has already visited in this session (navigating from About Us, etc.)
const shouldSkipLoader = sessionStorage.getItem('hasVisited') === 'true';

// Mark that user has visited (for subsequent navigations)
sessionStorage.setItem('hasVisited', 'true');

// Function to skip loader and show content immediately
function skipLoader() {
    if (loadingScreen) {
        loadingScreen.classList.add('loaded', 'hidden');
    }
    loadAnimateElements.forEach(el => {
        el.classList.add('loaded');
    });
}

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

// Decide whether to show or skip the loader
if (shouldSkipLoader) {
    // User is navigating from another page - skip loader
    skipLoader();
} else if (document.readyState === 'complete') {
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
// Form Handling (Formspree)
// ====================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // themed dropdown replaces the native (now hidden) select, so validate it here
        const ddSelect = contactForm.querySelector('select[data-required]');
        if (ddSelect && !ddSelect.value) {
            const dd = ddSelect.nextElementSibling;
            dd.classList.add('invalid');
            dd.querySelector('.dd-btn').focus();
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: new FormData(contactForm),
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showNotification('Message sent successfully! Mike will be in touch soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showNotification('Oops! Something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
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
        borderRadius: '0',
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


// ====================
// Themed dropdown (replaces native <select class="form-select">, whose option list can't be styled)
// ====================

document.querySelectorAll('select.form-select').forEach(sel => {
    const opts = [...sel.options].filter(o => !o.disabled);
    const placeholder = (sel.querySelector('option[disabled]') || {}).textContent || 'Select…';
    if (sel.required) { sel.removeAttribute('required'); sel.setAttribute('data-required', ''); }
    sel.style.display = 'none';

    const dd = document.createElement('div');
    dd.className = 'dd';
    dd.innerHTML = `<button type="button" class="dd-btn" aria-haspopup="listbox" aria-expanded="false">
        <span class="dd-val">${placeholder}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></button>
      <ul class="dd-list" role="listbox" tabindex="-1">${opts.map(o => `<li role="option" data-v="${o.value}">${o.textContent}</li>`).join('')}</ul>`;
    sel.after(dd);

    const btn = dd.querySelector('.dd-btn'), list = dd.querySelector('.dd-list'), val = dd.querySelector('.dd-val');
    const items = [...list.children];
    let hi = -1;
    const mark = i => { hi = (i + items.length) % items.length; items.forEach((el, k) => el.classList.toggle('hi', k === hi)); };
    const open = () => { dd.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); mark(hi < 0 ? 0 : hi); };
    const close = () => { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    const pick = i => {
        items.forEach((el, k) => { el.classList.toggle('sel', k === i); el.toggleAttribute('aria-selected', k === i); });
        sel.value = items[i].dataset.v; val.textContent = items[i].textContent;
        dd.classList.add('has-value'); dd.classList.remove('invalid'); hi = i; close(); btn.focus();
    };
    btn.addEventListener('click', () => (dd.classList.contains('open') ? close() : open()));
    list.addEventListener('click', e => { const li = e.target.closest('li'); if (li) pick(items.indexOf(li)); });
    items.forEach((el, k) => el.addEventListener('mouseenter', () => mark(k)));
    btn.addEventListener('keydown', e => {
        const isOpen = dd.classList.contains('open');
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); isOpen ? mark(hi + (e.key === 'ArrowDown' ? 1 : -1)) : open(); }
        else if ((e.key === 'Enter' || e.key === ' ') && isOpen) { e.preventDefault(); pick(hi); }
        else if (e.key === 'Escape' && isOpen) { close(); }
    });
    document.addEventListener('click', e => { if (!dd.contains(e.target)) close(); });
    sel.form && sel.form.addEventListener('reset', () => { sel.value = ''; val.textContent = placeholder; dd.classList.remove('has-value', 'invalid'); items.forEach(el => el.classList.remove('sel')); });
});
