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