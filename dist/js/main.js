// Grab the Elements from the DOM


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const moreBtn = document.querySelector('#more-btn')

// Here set inital state of menu
let showMenu = false;

// moreBtn.addEventListener('click', toggleMenu),
//     menuBtn.addEventListener('click', toggleMenu);

[menuBtn, moreBtn].forEach(item => {
    item.addEventListener('click', toggleMenu)

});

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item =>
            item.classList.add('show'));

        // Set menu State
        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item =>
            item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}