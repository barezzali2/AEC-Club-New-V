// Select the hamburger button and the menu
const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

// Toggle the 'active' class on the menu and the hamburger button
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
