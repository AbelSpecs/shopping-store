const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const burgericon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.shop-cart');
const productDetail = document.querySelector('.product-detail');
const close = document.querySelector('.product-detail-close');

let productList = [];

productList.push({
    name : 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name : 'Screen',
    price: '400,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name : 'PC',
    price: '750,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
);

function toogleMenu(){
    menu.classList.toggle('inactive');
    asideCart.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    asideCart.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toogleShoppingCart(){
    asideCart.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    menu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function openProductDetail(){
    productDetail.classList.remove('inactive');
    asideCart.classList.add('inactive');
    menu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

function arrayProductList(productList){

    for (product of productList){
        const productInfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        const productInfoName = document.createElement('p');
        productInfoPrice.innerText = product.price;
        productInfoName.innerText = product.name;
        productInfoDiv.append(productInfoPrice, productInfoName);
        
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', "file:///C:/Users/abeld/OneDrive/Documents/Desarrollos/frontend-developer-curso-practico/shopping-store/assets/assets/icons/bt_add_to_cart.svg");
        productInfoFigureImg.setAttribute('alt', "carrito");
        productInfoFigure.appendChild(productInfoFigureImg);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productInfo.append(productInfoDiv, productInfoFigure);
    
        const productCardImg = document.createElement('img');
        productCardImg.classList.add('product-img');
        productCardImg.setAttribute('src', product.image);
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.append(productCardImg, productInfo);
        productCard.addEventListener('click', openProductDetail);
    
        const cardContainer = document.querySelector('.cards-container');
        cardContainer.appendChild(productCard);
    
    };
}

arrayProductList(productList);

email.addEventListener('click', toogleMenu);
burgericon.addEventListener('click', toogleMobileMenu);
cart.addEventListener('click', toogleShoppingCart);
close.addEventListener('click', closeProductDetail);

