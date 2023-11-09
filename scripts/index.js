// Function to initialize a like button
function initializeLikeButton(buttonId, clickCountId) {
    var audio = new Audio('sounds/button.mp3')
    const likeButton = document.getElementById(buttonId);
    const clickCountElement = document.getElementById(clickCountId);
    let clickCount = localStorage.getItem(buttonId) || 0;

    // Display the initial click count from localStorage
    clickCountElement.textContent = clickCount;

    likeButton.addEventListener("click", function () {
        audio.play();
        clickCount++;
        clickCountElement.textContent = clickCount;


        // Update and save the click count to localStorage
        localStorage.setItem(buttonId, clickCount);
    });
}

// Initialize each like button separately
initializeLikeButton("likeButton1", "clickCount1");
initializeLikeButton("likeButton2", "clickCount2");
initializeLikeButton("likeButton3", "clickCount3");

// Get references to the image and video elements
const images = [document.getElementById("image1"), document.getElementById("image2"), document.getElementById("image3")];
const videos = [document.getElementById("video1"), document.getElementById("video2"), document.getElementById("video3")];

// Add event listeners to each image and video
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function (e) {
        images[i].style.display = "none";  // Hide the image
        videos[i].style.display = "block"; // Show the video
        videos[i].play();                 // Start playing the video
    });

    videos[i].addEventListener("mouseout", function (e) {
        videos[i].style.display = "none"; // Hide the video
        images[i].style.display = "block"; // Show the image
        videos[i].pause();                // Pause the video
    });
}

document.getElementById('scrollButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior (scrolling to the top of the page)

    // Get the target section (in this case, the 'About Us' section)
    var aboutUsSection = document.getElementById('Aboutus');

    // Scroll to the target section
    aboutUsSection.scrollIntoView({ behavior: 'smooth' }); // You can use 'auto' for instant scrolling
});














