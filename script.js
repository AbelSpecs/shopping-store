const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const burgericon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toogleMenu(){
    menu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

email.addEventListener('click', toogleMenu);
burgericon.addEventListener('click', toogleMobileMenu);

