const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');

function toogleMenu(){
    menu.classList.toggle('inactive');
}


email.addEventListener('click', toogleMenu);

