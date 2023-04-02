window.addEventListener('DOMContentLoaded', event => { });

window.onscroll = function () {
    const windowScroll = window.scrollY;
    const fixedMenu = document.querySelector('.header-fixed');
    if (windowScroll > 500) {
        fixedMenu.classList.add('show');
    }
    else {
        fixedMenu.classList.remove('show');
    }
}

const blogSwiper = new Swiper('.blogSwiper', {
    slidesPerView: 1.05,
    loop: true,
    grabCursor: true,
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
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

const magazinSwiper = new Swiper('.magazinSwiper', {
    slidesPerView: 1.05,
    loop: true,
    grabCursor: true,
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
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
