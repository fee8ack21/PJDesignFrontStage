$(function () {
    handleHomeQuestionTabLinkClick();
    handleHomeQuestionLinkClick();
    handleMobileListTargetClick();
})

function handleHomeQuestionTabLinkClick() {
    $('.js-service-question-tab-list-link').on('click', function (e) {
        e.preventDefault();
        _handle($(this).data('type'))
    })

    $('.js-service-question-mobile-tab-list-link').on('click', function (e) {
        e.preventDefault();
        _handle($(this).data('type'))
    })

    function _handle(type) {
        const attr = 'data-type';
        const classname = 'active';

        const $linkEles = $('.js-service-question-tab-list-link');
        $linkEles.each(function (i, ele) {
            const $ele = $(ele);

            if ($ele.data('type') != type) {
                $ele.removeClass(classname);
                return;
            }

            $ele.addClass(classname);
        })

        const $mobileTargetEle = $('.js-service-question-mobile-tab-list-target')
        const currentType = $mobileTargetEle.attr(attr);
        $mobileTargetEle.removeClass(classname)
        $('.js-service-question-mobile-tab-list').removeClass(classname);

        if (type == currentType) { return; }

        $mobileTargetEle.text($(`.js-service-question-mobile-tab-list-link[data-type="${type}"]`).text());
        $mobileTargetEle.attr(attr, type);
    }
}

function handleMobileListTargetClick() {
    $('.js-service-question-mobile-tab-list-target').on('click', function () {
        const activeClass = 'active';

        $(this).toggleClass(activeClass)
        $('.js-service-question-mobile-tab-list').toggleClass(activeClass)
    })
}

function handleHomeQuestionLinkClick() {
    $('.js-service-question-link').on('click', function (e) {
        e.preventDefault();
        _handleStatus($(this));
        _handleContentToggle($(this).data('index'));
    })

    function _handleStatus($ele) {
        const currentStatus = $ele.attr('data-status');
        if (currentStatus == '＋') {
            $ele.attr('data-status', '－')
            return;
        }
        $ele.attr('data-status', '＋')
    }

    function _handleContentToggle(i) {
        $(`.js-service-question-content[data-index="${i}"]`).toggleClass('active')
    }
}