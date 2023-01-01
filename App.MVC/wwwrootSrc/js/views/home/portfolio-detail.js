$(function () {
    initSwiper();
    handleSlideClick();
})

let swiper;

function initSwiper() {
    swiper = new Swiper(".js-portfolio-swiper", {
        speed: 1000,
        loop: true,
        effect: 'fade',
        autoHeight: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

function handleSlideClick() {
    $('.home-portfolio-detail .swiper-slide').on('click', function () {
        if (swiper == undefined) { return; }
        swiper.slideNext();
    })
}