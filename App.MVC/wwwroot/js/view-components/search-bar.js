$(function () {
    handleSelectTargetClick();
    handleListWrapVisibility()
    handleSelectListItemClick();
})

function handleSelectTargetClick() {
    $('.js-search-bar-select-target').on('click', function () {
        $('.js-search-bar-select-list-wrap').toggleClass('active')
    })
}

function handleListWrapVisibility() {
    $('html').on('click', function (e) {
        const $ele = $(e.target);
        if ($ele.closest(".js-search-bar-select-wrap").length > 0) {
            return;
        }

        $('.js-search-bar-select-list-wrap').removeClass('active')
    })
}

function handleSelectListItemClick() {
    $('.js-search-bar-select-list-item').on('click', function () {
        const value = $(this).data('value');
        const text = $(this).text();

        $('.js-search-bar-select-input').val(value);
        $('.js-search-bar-select-target').text(text);

        $('.js-search-bar-select-list-wrap').removeClass('active')
    })
}