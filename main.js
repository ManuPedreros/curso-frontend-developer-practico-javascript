const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

navBarEmail.addEventListener('click', toggleDesktopMenu);
navIconMenu.addEventListener('click', toggleMobilepMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu() {
    mobileMenu.classList.toggle('inactive')
}
