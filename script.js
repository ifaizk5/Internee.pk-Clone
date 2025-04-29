const counter = document.getElementById('counter');
const targetNumber = 1000; // Target number
let currentNumber = 0;
const speed = 50; // Speed of the animation in ms
let hasAnimated = false; // To make sure the animation happens only once

function updateCounter() {
    if (currentNumber < targetNumber) {
        currentNumber++;
        counter.textContent = currentNumber;
        setTimeout(updateCounter, speed);
    }
}

// Intersection Observer to trigger animation when the counter is in view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            updateCounter(); // Start the animation when the element is in view
            hasAnimated = true; // Mark that the animation has occurred
        }
    });
}, { threshold: 0.5 }); // Trigger animation when 50% of the counter is in view

// Start observing the counter element
observer.observe(counter);
