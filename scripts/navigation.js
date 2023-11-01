document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        navigateNext();
    } else if (event.key === 'ArrowLeft') {
        navigatePrevious();
    }
});

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
function fadeOutAndRedirect(targetPage) {
    const body = document.body;
    body.style.opacity = 0;
    setTimeout(function () {
        window.location.href = targetPage;
    }, 500); // Adjust the time (in milliseconds) for the fade-out effect
}