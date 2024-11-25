const slider = document.getElementById('slider');
const paginationContainer = document.querySelector('.pagination');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let projects = [];
let currentSlide = 0;

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        projects = data.projects; // Load projects from the JSON file
        renderProjects();
        createBubbles();
        updateSlider();
    });

// Render project data into the slider
function renderProjects() {
    projects.forEach((project, index) => {
        const slide = document.createElement('li');
        slide.classList.add('slide');
        if (index === 0) slide.classList.add('show'); // Show the first slide initially

        slide.innerHTML = `
            <div class="projContainer">
                <img src="${project.imgSrc}" alt="${project.alt}" class="projPic">
                <video src="${project.videoSrc}" class="projVid" muted loop></video>
            </div>
            <div class="textBox">
                <p id="slider-content">${project.description}</p>
                <a href="${project.githubLink}" class="slider-logo"><i class="fab fa-github"></i></a>
            </div>
        `;

        slider.appendChild(slide);
    });

    // Add hover events to handle swapping and video playback
    const containers = document.querySelectorAll('.projContainer');
    containers.forEach(container => {
        const image = container.querySelector('.projPic');
        const video = container.querySelector('.projVid');

        container.addEventListener('mouseenter', () => {
            image.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });

        container.addEventListener('mouseleave', () => {
            video.pause();
            video.style.display = 'none';
            image.style.display = 'block';
        });
    });
}

// Create bubbles for each slide
function createBubbles() {
    projects.forEach((_, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        if (index === 0) bubble.classList.add('active');
        bubble.dataset.index = index;
        paginationContainer.appendChild(bubble);
    });

    // Add click events to bubbles
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.addEventListener('click', (e) => {
            currentSlide = parseInt(e.target.dataset.index, 10);
            updateSlider();
        });
    });
}

// Update the slider position and active bubble
function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].clientWidth;

    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach(bubble => bubble.classList.remove('active'));
    bubbles[currentSlide].classList.add('active');
}

// Navigate to the previous slide
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + projects.length) % projects.length;
    updateSlider();
});

// Navigate to the next slide
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % projects.length;
    updateSlider();
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % projects.length;
    updateSlider();
}, 13500);



// Adjust the slider on window resize
window.addEventListener('resize', updateSlider);

const navToggle = document.getElementById("nav-toggle");
const navItems = document.getElementById("nav-items");

navToggle.addEventListener("click", () => {
    navItems.classList.toggle("active"); // Toggle the active class to show/hide the menu
});





document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        const image = slide.querySelector('.projPic');
        const video = slide.querySelector('.projVid');
        video.style.display = 'none'; // Hide the video


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

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const projectsSection = document.getElementById('Project'); // The section to stop following before
    const navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', () => {
        const stopPosition = projectsSection.getBoundingClientRect().top;

        if (stopPosition <= navbarHeight) {
            // When the scroll reaches the Projects section
            navbar.classList.add('nav-hidden');
        } else {
            // While scrolling above the Projects section
            navbar.classList.remove('nav-hidden');
        }
    });
});

