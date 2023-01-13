const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navIconShopCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

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

const productList = [];

function insertNewProduct(name, price, image){
    productList.push({
        name: name,
        price: price,
        image: image,
    });
}

insertNewProduct('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
insertNewProduct('Laptop', 360, 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
insertNewProduct('Bag', 30, 'https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg?auto=compress&cs=tinysrgb&w=600');
insertNewProduct('Running shoes', 80, 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600');
insertNewProduct('Swimsuit', 40, 'https://images.pexels.com/photos/54265/bikini-two-piece-swimwear-women-two-parter-54265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
insertNewProduct('Umbrella', 15, 'https://images.pexels.com/photos/751099/pexels-photo-751099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
insertNewProduct('Bike2', 85, 'https://images.pexels.com/photos/4198566/pexels-photo-4198566.jpeg?auto=compress&cs=tinysrgb&w=600');
insertNewProduct('Bag2', 45, 'https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=600');
insertNewProduct('Swimsuit2', 55, 'https://images.pexels.com/photos/4284291/pexels-photo-4284291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
insertNewProduct('Umbrella2', 25, 'https://images.pexels.com/photos/6401654/pexels-photo-6401654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const divProductInfo = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        divProductInfo.appendChild(productPrice);
        divProductInfo.appendChild(productName);

        const productFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
        
        productFigure.appendChild(productImgCart);
        productInfo.appendChild(divProductInfo);
        productInfo.appendChild(productFigure);
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);