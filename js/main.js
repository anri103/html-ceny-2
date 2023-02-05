/*
Theme: Smeshnie Ceny
Author: Andrey Galkin
Version: 2.0
*/

//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    const blogSwiper = new Swiper('.blogSwiper', {
        slidesPerView: 1.05,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#blogSwiper-next',
            prevEl: '#blogSwiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
    });

    const magazinSwiper = new Swiper('.magazinSwiper', {
        slidesPerView: 1.05,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#magazinSwiper-next',
            prevEl: '#magazinSwiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });

});