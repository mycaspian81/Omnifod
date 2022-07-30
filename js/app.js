const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


const btnOpenNavEl = document.querySelector('.menu-open');
const btnCloseNavEl = document.querySelector('.menu-close');
const headerEl = document.querySelector('.header')

btnOpenNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav__open');
})

btnCloseNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav__open');
})
