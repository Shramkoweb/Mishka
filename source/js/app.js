var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
    navMain.classList.toggle('main-nav--closed');
})
