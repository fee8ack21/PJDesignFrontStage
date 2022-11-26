$(function () {
    handleTypeWriter();
    handleLoader();
})

function handleLoader() {
    const $loaderEle = $('.js-loader')
    const classname = 'active'

    $loaderEle.addClass(classname);
    
    setTimeout(() => {
        $loaderEle.removeClass(classname);
    }, 1000)
}

function handleTypeWriter() {
    const $loaderEle = $('.js-loader')
    const $textEle = $loaderEle.find('.loader__text');

    const txt = 'PJ Design';
    const speed = 150;
    let i = 0;

    _handle();

    function _handle() {
        if (i < txt.length) {
            const newTxt = $textEle.html() + txt.charAt(i)
            $textEle.html(newTxt);
            i++;
            setTimeout(_handle, speed);
        }
    }
}