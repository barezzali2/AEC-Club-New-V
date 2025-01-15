// Select the hamburger button and the menu
const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
    const isMenuActive = menu.classList.contains('active'); // Check if the menu is already active

    if (!isMenuActive) {
        // Activate the menu
        menu.classList.add('active');
        hamburger.classList.add('active');

        const menuHeight = menu.offsetHeight;
        main.style.marginTop = `${menuHeight}px`;
    } else {
        // Deactivate the menu
        menu.classList.remove('active');
        hamburger.classList.remove('active');

        main.style.marginTop = '0';
    }
});
