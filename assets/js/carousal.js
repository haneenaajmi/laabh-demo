const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spacebetween: 30,

    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // responsive break points
    breakpoints: {
        0: {
            slidesPreView: 1
        },
        768: {
            slidesPreView: 2
        },
        1024: {
            slidesPreView: 3
        }
    }

});