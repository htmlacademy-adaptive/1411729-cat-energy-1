let headerMain = document.querySelector('.site-header');
let navMain = document.querySelector('.site-menu');
let navToggle = document.querySelector('.site-menu__button');

headerMain.classList.remove('site-header--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('site-menu--closed')) {
    navMain.classList.remove('site-menu--closed');
    navMain.classList.add('site-menu--opened');
  } else {
    navMain.classList.add('site-menu--closed');
    navMain.classList.remove('site-menu--opened');
  }
});
