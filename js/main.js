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
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        },
    });

});