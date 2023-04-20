//Accordion
new Accordion('.faq__list', {
    elementClass: 'faq__item',
    triggerClass: 'faq__link',
    panelClass: 'faq__content',
    activeClass: 'faq--active'
});

//Tabs
let tabsBtn = document.querySelectorAll('.how__link');
let tabsItem = document.querySelectorAll('.how__steps');

tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function (btn) { btn.classList.remove('how__link--active') });
        e.currentTarget.classList.add('how__link--active');

        tabsItem.forEach(function (element) { element.classList.remove('how__steps--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('how__steps--active');
    });
});

//Burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');

    })
})

//Search-Burger
let searchBurger = document.querySelector('.nav__search');
let searchMenu = document.querySelector('.search-form');
let searchClosed = document.querySelector('.search-closed');

searchBurger.addEventListener('click',

    function () {

        searchBurger.classList.toggle('nav__search--active');

        searchMenu.classList.toggle('search-form--active');

        document.body.classList.toggle('stop-scroll');

    })

searchClosed.addEventListener('click',

    function () {

        searchBurger.classList.remove('nav__search--active');

        searchMenu.classList.remove('search-form--active');

        document.body.classList.remove('stop-scroll');

    })

//Slider
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    loop: true,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slideToClickedSlide: true,
    clickable: true,
});