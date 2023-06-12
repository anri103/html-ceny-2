window.onscroll = function() {
    const windowScroll = window.scrollY;
	const fixedMenu = document.querySelector('.sticky-heading');
    if (windowScroll > 200) {
        fixedMenu.classList.add('shadow-sm');
    }
    else {
        fixedMenu.classList.remove('shadow-sm');
    }
}

const blogSwiper = new Swiper('.blogSwiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.blogSwiper-container .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.blogSwiper-container .swiper-button-next',
        prevEl: '.blogSwiper-container .swiper-button-prev',
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
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.magazinSwiper-container .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.magazinSwiper-container .swiper-button-next',
        prevEl: '.magazinSwiper-container .swiper-button-prev',
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
