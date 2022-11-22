$(function () {
    handleGoToBtnClick();
    handleGoToBtnVisibility();
})

function handleGoToBtnVisibility() {
    $(window).scroll(function () {
        const $btn = $('.js-go-to-btn')
        const scrollTop = $(window).scrollTop();
        const activeClass = 'active';

        if (scrollTop > 100) {
            $btn.addClass(activeClass)
            return;
        }
        
        $btn.removeClass(activeClass)
    });
}

function handleGoToBtnClick() {
    $('.js-go-to-btn').on('click', function (e) {
        e.preventDefault();

        $("html, body").animate({ scrollTop: 0 }, "slow");
        return;
    })
}

