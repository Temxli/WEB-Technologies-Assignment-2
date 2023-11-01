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
