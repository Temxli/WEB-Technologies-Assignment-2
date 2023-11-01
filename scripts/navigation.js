document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        navigateNext();
    } else if (event.key === 'ArrowLeft') {
        navigatePrevious();
    }
});

console.log("1123123")

function navigateNext() {
    const currentPage = getCurrentPage();
    if (currentPage === 'pizza.html') {
        window.location.href = 'dessert.html';
    } else if (currentPage === 'dessert.html') {
        window.location.href = 'grill.html';
    }
    // You can add more logic for handling other cases.
}

function navigatePrevious() {
    const currentPage = getCurrentPage();
    if (currentPage === 'dessert.html') {
        window.location.href = 'pizza.html';
    } else if (currentPage === 'grill.html') {
        window.location.href = 'dessert.html';
    }
    // You can add more logic for handling other cases.
}

function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}



// Get the input element and attach an event listener for input events
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    const searchText = searchInput.value.toLowerCase(); // Get the search text and convert to lowercase

    // Loop through recipe items and hide/show them based on the search text
    const recipeItems = document.querySelectorAll('.recipe-item');
    recipeItems.forEach(item => {
        const recipeName = item.querySelector('h5').innerText.toLowerCase(); // Get the recipe name and convert to lowercase
        // If the recipe name contains the search text, show the item, otherwise hide it
        if (recipeName.includes(searchText)) {
            item.style.display = 'block';
            console.log("Searched");
        } else {
            item.style.display = 'none';
        }
    });
});


// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all recipe items
    var recipeItems = document.querySelectorAll('.recipe-item');
  
    // Add the 'recipe-item' class to trigger the fade-in animation
    recipeItems.forEach(function(recipeItem) {
      recipeItem.classList.add('recipe-item');
    });
});
  

$(document).ready(function() {
    // Function to handle scroll event
    $(window).on('scroll', function() {
        // Get the scroll position
        var scroll = $(window).scrollTop();
        
        // Add or remove 'scrolled' class based on scroll position
        if (scroll >= 50) {
            console.log("Scrolled");
            $('.sticky-top').addClass('scrolled');
        } else {
            $('.sticky-top').removeClass('scrolled');
        }
    });
});

