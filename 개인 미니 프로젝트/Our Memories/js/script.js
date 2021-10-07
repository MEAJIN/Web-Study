// search
let searchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = () => {
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//login
let loginForm = document.querySelector('.login-form');

document.querySelector('#sign-in').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

//menu-btn
let navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

//remove
window.onscroll = () => {
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}