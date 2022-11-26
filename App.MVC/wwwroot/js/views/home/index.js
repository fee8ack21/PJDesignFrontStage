import * as Modal from "../../view-components/modal.js";

$(function () {
    handleCarousel();
    handlePortfolioLinkClick();
})

function handlePortfolioLinkClick() {
    $('.js-home-index-portfolio-link').on('click', function (e) {
        e.preventDefault();
        Modal.layoutModal.show();
    })
}

function handleCarousel() {
    $('.js-home-index-carousel[data-carousel-type="1"]').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })

    $('.js-home-index-carousel[data-carousel-type="2"]').owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1.5
            },
            576: {
                items: 2.5
            },
            768: {
                items: 3.5
            },
            992: {
                items: 4.5
            },
            1200: {
                items: 5.5
            }
        }
    })
}
