// TaleHive JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the books carousel
    initBooksCarousel();
    
    // Initialize the featured books carousel
    initFeaturedBooksCarousel();
    
    // Initialize the recently added books section
    initRecentlyAddedBooks();
    
    // Add class names to elements for custom CSS effects
    addCustomClasses();
});

/**
 * Initialize the trending books carousel with navigation functionality
 */
function initBooksCarousel() {
    const carousel = document.getElementById('books-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    // Get all book items in the carousel
    const bookItems = carousel.children;
    const itemWidth = bookItems[0].offsetWidth + 24; // Width + margin
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    
    let currentPosition = 0;
    const maxPosition = bookItems.length - visibleItems;
    
    // Update carousel position
    function updateCarouselPosition() {
        carousel.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
        
        // Update button states
        prevBtn.disabled = currentPosition <= 0;
        nextBtn.disabled = currentPosition >= maxPosition;
        
        // Visual feedback for disabled buttons
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    }
    
    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', function() {
        if (currentPosition > 0) {
            currentPosition--;
            updateCarouselPosition();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentPosition < maxPosition) {
            currentPosition++;
            updateCarouselPosition();
        }
    });
    
    // Initialize button states
    updateCarouselPosition();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Recalculate visible items
        const newVisibleItems = Math.floor(carousel.offsetWidth / itemWidth);
        if (newVisibleItems !== visibleItems) {
            // Reset position if needed
            currentPosition = 0;
            updateCarouselPosition();
        }
    });
}

/**
 * Add custom class names to elements for CSS styling
 */
function addCustomClasses() {
    // Add class to hero image
    const heroImage = document.querySelector('.hero-section img');
    if (heroImage) {
        heroImage.classList.add('hero-book-image');
    }
    
    // Add classes to book cards
    const bookCards = document.querySelectorAll('#books-carousel > div');
    bookCards.forEach(card => {
        card.classList.add('book-card');
    });
    
    // Add classes to category cards
    const categoryCards = document.querySelectorAll('.categories-section .grid > div');
    categoryCards.forEach(card => {
        card.classList.add('category-card');
    });
    
    // Add classes to buttons
    const primaryButtons = document.querySelectorAll('.bg-yellow-500');
    primaryButtons.forEach(button => {
        button.classList.add('btn-primary');
    });
    
    // Add class to newsletter input
    const newsletterInput = document.querySelector('.newsletter-section input');
    if (newsletterInput) {
        newsletterInput.classList.add('newsletter-input');
    }
}

/**
 * Mobile menu toggle functionality
 */
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('open');
    }
}
