export class Modal {
    _defaultTitle = '系統通知';
    _defaultContent = [''];

    _isOverlayClickable = true;
    _activeClass = 'active';
    _cancelBtnClickCb;
    _confirmBtnClickCb;

    constructor(name) {
        this.element = $(`.js-modal[data-name="${name}"]`);
        this._handleClose();
        this._handleCloseBtnClick();
        this._handleConfirmBtnClick();
    }

    show() {
        this.element.addClass(this._activeClass);
    }

    hide() {
        this.element.removeClass(this._activeClass);
    }

    toggle() {
        if (this.element.hasClass(this._activeClass)) {
            this.hide();
            return;
        }

        this.show();
    }

    setTitle(title) {
        this.element.find('.modal__title').text(title);
    }

    setContent(texts) {
        if (!Array.isArray(texts)) { return; }

        let html = '';
        texts.forEach(text => {
            html += `<p>${text}</p>`;
        })

        this.element.find('.modal__body').html(html);
    }

    showCloseIcon() {
        this.element.find('.js-modal-close').show();
    }

    hideCloseIcon() {
        this.element.find('.js-modal-close').hide();
    }

    setIfOverlayClickable(bool) {
        if (typeof bool != 'boolean') { return; }
        this._isOverlayClickable = bool;
    }

    showCancelBtn() {
        this.element.find('.js-close-btn').show();
    }

    hideCancelBtn() {
        this.element.find('.js-close-btn').hide();
    }

    setCancelBtnCb(fn) {
        if (typeof fn != 'function') { return; }
        this._cancelBtnClickCb = fn;
    }

    removeCancelBtnCb() {
        this._cancelBtnClickCb = undefined;
    }

    setConfirmBtnCb(fn) {
        if (typeof fn != 'function') { return; }
        this._confirmBtnClickCb = fn;
    }

    removeConfirmBtnCb() {
        this._confirmBtnClickCb = undefined;
    }

    resetStatus() {
        this._cancelBtnClickCb = undefined;
        this._confirmBtnClickCb = undefined;
        this._isOverlayClickable = true;
        this.showCloseIcon();
        this.showCancelBtn();
        this.setTitle(this._defaultTitle);
        this.setContent(this._defaultContent);
    }

    _handleClose() {
        const _this = this;

        this.element.find('.js-modal-close').on('click', function (e) {
            e.preventDefault();
            const name = $(this).data('name');
            $(`.js-modal[data-name="${name}"]`).removeClass('active')
        })

        this.element.on('click', function (e) {
            if (!_this._isOverlayClickable) { return; }
            if ($(e.target).hasClass('js-modal')) {
                $(this).removeClass('active')
            }
        })
    }

    _handleCloseBtnClick() {
        const _this = this;
        this.element.find('.js-close-btn').on('click', function (e) {
            if (typeof _this._cancelBtnClickCb == 'function') {
                _this._cancelBtnClickCb();
            }

            _this.hide();
        })
    }

    _handleConfirmBtnClick() {
        const _this = this;
        this.element.find('.js-confirm-btn').on('click', function (e) {
            if (typeof _this._confirmBtnClickCb == 'function') {
                _this._confirmBtnClickCb();
            }

            _this.hide();
        })
    }
}

export const layoutModal = new Modal('layout');
export const warningModal = new Modal('warning');
