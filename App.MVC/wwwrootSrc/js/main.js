import * as Modal from './view-components/modal.js';
import * as CookieHelper from './helpers/cookie.js';

$(function () {
    handleWarningModal();
    handleLoader();
    handleGoToBtnClick();
    handleGoToBtnVisibility();
    handleLoaderTypeWriter();
})

function handleWarningModal() {
    if (isWarningRead()) { return; }

    Modal.layoutModal.resetStatus();
    Modal.layoutModal.hideCancelBtn();
    Modal.layoutModal.hideCloseIcon();
    Modal.layoutModal.setIfOverlayClickable(false);
    Modal.layoutModal.setTitle('系統通知');
    Modal.layoutModal.setContent(['提醒您，本站僅為練習用，切勿採用本站任何資訊。', '目前前台尚未套版，僅作功能參考。'])
    Modal.layoutModal.setConfirmBtnCb(function () {
        CookieHelper.setCookie('isWarningRead', true, 1);
    })
    Modal.layoutModal.show();
}

function isWarningRead() {
    return CookieHelper.getCookie('isWarningRead') && $.parseJSON(CookieHelper.getCookie('isWarningRead').toLowerCase())
}

function handleLoader() {
    const $loaderEle = $('.js-loader')
    const classname = 'active'

    $loaderEle.addClass(classname);

    setTimeout(() => {
        $loaderEle.removeClass(classname);
    }, 1000)
}

function handleLoaderTypeWriter() {
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

