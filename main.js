const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navIconShopCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');

navBarEmail.addEventListener('click', toggleDesktopMenu);
navIconMenu.addEventListener('click', toggleMobilepMenu);
navIconShopCart.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isCarritoAsideClosed = asideCart.classList.contains('inactive')

    if (!isCarritoAsideClosed) {
        asideCart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu() {
    const isCarritoAsideClosed = asideCart.classList.contains('inactive')
    
    if (!isCarritoAsideClosed) {
        asideCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    asideCart.classList.toggle('inactive')
}
