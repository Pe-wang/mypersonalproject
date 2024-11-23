// Toggle menu visibility when clicking on the hamburger icon
function toggleMenu() {
    const dropdown = document.querySelector('.dropdown');
    const currentDisplay = dropdown.style.display;

    // Toggle visibility
    if (currentDisplay === 'none' || currentDisplay === '') {
        dropdown.style.display = 'block'; // Show menu
    } else {
        dropdown.style.display = 'none'; // Hide menu
    }
}
