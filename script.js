let currentIndex = 0; 
let slidesToShow = 4; // Default number of slides visible

// Function to calculate the number of slides to show based on screen width
function updateSlidesToShow() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 1200) {
        slidesToShow = 4;
    } else if (screenWidth > 800) {
        slidesToShow = 3;
    } else if (screenWidth > 600) {
        slidesToShow = 2;
    } else {
        slidesToShow = 1;
    }

    currentIndex = 0; // Reset index to avoid out-of-bounds
    updateSlider();
}

// Function to update the slider's position
function updateSlider() {
    const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slides[0]).marginRight);
    const totalWidth = slideWidth * slidesToShow;

    slider.style.width = `${totalWidth}px`; // Set the slider container width
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listener for the next button
document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < slides.length - slidesToShow) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first slide
    }
    updateSlider();
});

// Event listener for the previous button
document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - slidesToShow; // Go to the last visible group of slides
    }
    updateSlider();
});

// Event listener for window resize to update the number of slides to show
window.addEventListener('resize', updateSlidesToShow);

// Initialize slider on page load
updateSlidesToShow();



document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        const image = slide.querySelector('.projPic');
        const video = slide.querySelector('.projVid');

        slide.addEventListener('mouseenter', function () {
            image.style.display = 'none'; // Hide the image
            video.style.display = 'block'; // Show the video
            video.play(); // Play the video
        });

        slide.addEventListener('mouseleave', function () {
            video.style.display = 'none'; // Hide the video
            video.pause(); // Pause the video
            video.currentTime = 0; // Reset the video to the start
            image.style.display = 'block'; // Show the image
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-item a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor click behavior
            const sectionId = this.getAttribute('href'); // Get the href attribute (e.g., #about-me)
            const section = document.querySelector(sectionId); // Find the section with the corresponding ID

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
            }
        });
    });
});



