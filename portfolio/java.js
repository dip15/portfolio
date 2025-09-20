document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.arrow.prev');
    const nextBtn = document.querySelector('.arrow.next');
    let currentSlide = 0;
    let slideInterval;

    // Function to show a specific slide
    function showSlide(n) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Adjust currentSlide index if out of bounds
        if (n >= slides.length) currentSlide = 0;
        if (n < 0) currentSlide = slides.length - 1;
        else currentSlide = n;
        
        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Function to move to next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Function to move to previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Set up automatic sliding
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop automatic sliding
    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Event listeners for arrows
    nextBtn.addEventListener('click', function() {
        stopSlider();
        nextSlide();
        startSlider();
    });

    prevBtn.addEventListener('click', function() {
        stopSlider();
        prevSlide();
        startSlider();
    });

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });

    // Pause slider when mouse is over it
    document.querySelector('.slider-container').addEventListener('mouseenter', stopSlider);
    document.querySelector('.slider-container').addEventListener('mouseleave', startSlider);

    // Start the slider
    startSlider();
});