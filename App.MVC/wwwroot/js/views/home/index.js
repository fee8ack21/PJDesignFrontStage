import * as Modal from "../../view-components/modal.js";

$(function () {
    handlePortfolioLinkClick();
})

function handlePortfolioLinkClick() {
    $('.js-home-index-portfolio-link').on('click', function (e) {
        e.preventDefault();
        Modal.layoutModal.show();
    })
}