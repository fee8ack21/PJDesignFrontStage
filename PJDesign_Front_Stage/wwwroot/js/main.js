import * as Modal from './view-components/modal.js';
import * as CookieHelper from './helpers/cookie.js';

$(function () {
    handleWarningModal();
})

function handleWarningModal() {
    if (isWarningRead()) { return; }

    Modal.layoutModal.resetStatus();
    Modal.layoutModal.hideCancelBtn();
    Modal.layoutModal.hideCloseIcon();
    Modal.layoutModal.setIfOverlayClickable(false);
    Modal.layoutModal.setTitle('系統通知');
    Modal.layoutModal.setContent('提醒您，本站僅為練習用，切勿採用本站任何資訊。')
    Modal.layoutModal.setConfirmBtnCb(function () {
        CookieHelper.setCookie('isWarningRead', true, 1);
    })
    Modal.layoutModal.show();
}

function isWarningRead() {
    return CookieHelper.getCookie('isWarningRead') && $.parseJSON(CookieHelper.getCookie('isWarningRead').toLowerCase())
}