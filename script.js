const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < slides.length - 4) { // Adjust the number based on visible slides
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first slide
    }
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 4; // Go to the last visible group of slides
    }
    updateSlider();
});

function updateSlider() {
    const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slides[0]).marginRight);
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}   


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