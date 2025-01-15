// Select the hamburger button and the menu
const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');
const main = document.querySelector('main');

// Toggle the 'active' class on the menu and the hamburger button
hamburger.addEventListener('click', () => {
    const isMenuActive = menu.classList.contains('active'); // Check if the menu is already active

    if (!isMenuActive) {
        // Activate the menu
        menu.classList.add('active');
        hamburger.classList.add('active');

        // Get the height of the menu and set it as a margin for main
        const menuHeight = menu.offsetHeight;
        main.style.marginTop = `${menuHeight}px`;
    } else {
        // Deactivate the menu
        menu.classList.remove('active');
        hamburger.classList.remove('active');

        // Reset the margin when the menu is closed
        main.style.marginTop = '0';
    }
});
