//////////////////////////////////////////////////////////////////
// [ Fixed header ]

window.onscroll = function() {
    const windowScroll = window.scrollY;
	const fixedMenu = document.querySelector('.fixed-header');
    if (windowScroll > 200) {
        fixedMenu.classList.add('js-header');
    }
    else {
        fixedMenu.classList.remove('js-header');
    }
}

//////////////////////////////////////////////////////////////////
// [ Swiper Sliders ]

const blogSwiper = new Swiper('.blogSwiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.blogSwiper-next',
        prevEl: '.blogSwiper-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

const magazinSwiper = new Swiper('.magazinSwiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.magazinSwiper-next',
        prevEl: '.magazinSwiper-prev',
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

const gallerySwiper = new Swiper('.gallerySwiper', {
    slidesPerView: 1,
    loop: false,
    spaceBetween: 16,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        type: "classic",
    },
    Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
    },
});
