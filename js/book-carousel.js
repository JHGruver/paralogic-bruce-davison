// ====================
// Book Carousel Controller
// Midnight Gallery
// ====================

class BookCarousel {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 17;
        this.isAnimating = false;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 5000; // 5 seconds

        this.init();
    }

    init() {
        // Cache DOM elements
        this.pages = document.querySelectorAll('.page');
        this.progressFill = document.querySelector('.progress-fill');
        this.progressIndicator = document.querySelector('.progress-indicator');
        this.pageCounter = document.querySelector('.page-counter');
        this.prevBtn = document.querySelector('.book-prev');
        this.nextBtn = document.querySelector('.book-next');

        if (!this.pages.length) return;

        // Preload images
        this.preloadImages();

        // Bind events
        this.bindEvents();

        // Start autoplay
        this.startAutoPlay();

        // Update initial state
        this.updateControls();
    }

    preloadImages() {
        this.pages.forEach(page => {
            const bgImage = page.style.backgroundImage;
            if (bgImage) {
                const imageUrl = bgImage.slice(5, -2);
                const img = new Image();
                img.src = imageUrl;
            }
        });
    }

    bindEvents() {
        // Navigation buttons
        this.prevBtn?.addEventListener('click', () => this.prevPage());
        this.nextBtn?.addEventListener('click', () => this.nextPage());

        // Click on page to advance
        this.pages.forEach(page => {
            page.addEventListener('click', () => {
                if (!this.isAnimating) {
                    this.nextPage();
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevPage();
            } else if (e.key === 'ArrowRight') {
                this.nextPage();
            }
        });

        // Pause autoplay on hover
        const bookContainer = document.querySelector('.book-container');
        bookContainer?.addEventListener('mouseenter', () => this.stopAutoPlay());
        bookContainer?.addEventListener('mouseleave', () => this.startAutoPlay());

        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAutoPlay();
            } else {
                this.startAutoPlay();
            }
        });

        // Touch/swipe support
        this.setupTouchEvents();
    }

    setupTouchEvents() {
        const bookContainer = document.querySelector('.book-container');
        if (!bookContainer) return;

        let touchStartX = 0;
        let touchEndX = 0;

        bookContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        bookContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextPage();
            } else {
                this.prevPage();
            }
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages && !this.isAnimating) {
            this.goToPage(this.currentPage + 1);
        } else if (this.currentPage === this.totalPages) {
            this.resetBook();
        }
    }

    prevPage() {
        if (this.currentPage > 1 && !this.isAnimating) {
            this.goToPage(this.currentPage - 1);
        }
    }

    goToPage(pageNumber) {
        if (pageNumber === this.currentPage || this.isAnimating) {
            return;
        }

        this.isAnimating = true;
        this.stopAutoPlay();

        const direction = pageNumber > this.currentPage ? 'forward' : 'backward';

        if (direction === 'forward') {
            for (let i = this.currentPage; i < pageNumber; i++) {
                this.turnPage(i);
            }
        } else {
            for (let i = this.currentPage - 1; i >= pageNumber; i--) {
                this.unturnPage(i);
            }
        }

        this.currentPage = pageNumber;
        this.updateControls();

        setTimeout(() => {
            this.isAnimating = false;
            this.startAutoPlay();
        }, 800);
    }

    turnPage(pageIndex) {
        const page = this.pages[pageIndex - 1];
        if (page) {
            page.classList.remove('active');
            page.classList.add('turning');

            setTimeout(() => {
                page.classList.remove('turning');
                page.classList.add('turned');
            }, 800);
        }
    }

    unturnPage(pageIndex) {
        const page = this.pages[pageIndex - 1];
        if (page) {
            page.classList.remove('turned');
            page.classList.add('turning');

            setTimeout(() => {
                page.classList.remove('turning');
                page.classList.add('active');
            }, 800);
        }
    }

    resetBook() {
        this.isAnimating = true;
        this.stopAutoPlay();

        this.pages.forEach((page, index) => {
            setTimeout(() => {
                page.classList.remove('turned', 'turning', 'active');
                if (index === 0) {
                    page.classList.add('active');
                }
            }, index * 50);
        });

        this.currentPage = 1;
        this.updateControls();

        setTimeout(() => {
            this.isAnimating = false;
            this.startAutoPlay();
        }, this.pages.length * 50 + 300);
    }

    updateControls() {
        // Update progress bar
        const progress = (this.currentPage / this.totalPages) * 100;

        if (this.progressFill) {
            this.progressFill.style.width = `${progress}%`;
        }

        if (this.progressIndicator) {
            this.progressIndicator.style.left = `${progress}%`;
        }

        // Update page counter
        if (this.pageCounter) {
            this.pageCounter.textContent = `${this.currentPage} / ${this.totalPages}`;
        }

        // Update button states
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentPage === 1;
        }

        if (this.nextBtn) {
            this.nextBtn.disabled = false;
        }

        // Update active page
        this.pages.forEach((page, index) => {
            if (index + 1 === this.currentPage && !page.classList.contains('turned')) {
                page.classList.add('active');
            } else if (index + 1 !== this.currentPage) {
                page.classList.remove('active');
            }
        });
    }

    startAutoPlay() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        this.stopAutoPlay();

        this.autoPlayInterval = setInterval(() => {
            this.nextPage();
        }, this.autoPlayDelay);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new BookCarousel();
});
