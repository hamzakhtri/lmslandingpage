// Set the images to be displayed in sequence
let images = document.querySelectorAll('.multi-images img');
let currentIndex = 0;

// Function to change images
function changeImage() {
    // Hide the current image
    images[currentIndex].style.display = 'none';

    // Increment the index (cycle back to 0 if at the end)
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].style.display = 'block';
}

// Change image every 2 seconds
setInterval(changeImage, 2000);
