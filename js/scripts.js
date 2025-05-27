// Custom JavaScript for KayGifts x Cafe 75

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar shrink function
    var navbarShrink = function () {
        const mainNav = document.getElementById('mainNav');
        if (!mainNav) return;
        
        if (window.scrollY === 0) {
            mainNav.classList.remove('navbar-shrink')
        } else {
            mainNav.classList.add('navbar-shrink')
        }
    };
    
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }
    
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 72, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation for feature images on scroll
    const animateOnScroll = function() {
        const features = document.querySelectorAll('.feature-item');
        
        features.forEach(feature => {
            const featurePosition = feature.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (featurePosition < screenPosition) {
                feature.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };
    
    // Initial check for elements in viewport
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize appointment button
    const appointmentBtn = document.querySelector('.appointment-btn');
    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', function() {
            // This would typically open a modal or redirect to a booking page
            alert('Booking functionality would be implemented here');
        });
    }
    
    // Gallery image click handler
    const galleryImages = document.querySelectorAll('.gallery-img, .social-img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            // This would typically open a lightbox or larger view
            // For now, we'll just log the action
            console.log('Image clicked:', this.src);
        });
    });
});