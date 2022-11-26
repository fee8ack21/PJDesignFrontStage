$(function () {
    handleSubmitBtn()
})

function handleSubmitBtn() {
    $('.js-submit-btn').on('click', function () {
        $('.js-modal').addClass('active')
    })
}