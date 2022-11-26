$(function () {
    handleBurgerToggle();
    handleListLinkHover();
    handleInnerListWrapMouseEnter();
    handleInnerListMouseLeave();
    handleListLinkClick();
    handleWindowResize();
    handleHeaderWheel();
    handleHeaderScroll();
});

function handleBurgerToggle() {
    $('.js-header-burger-link').on('click', function (e) {
        e.preventDefault();

        const activeClass = 'active';
        $('.js-header-list-wrap').toggleClass(activeClass);
        $('.js-header-mobile-mask').toggleClass(activeClass);
        $('.js-header-burger-link').toggleClass(activeClass)
    })
}

function handleListLinkHover() {
    const activeClass = 'active';

    const $listWrapEle = $('.js-header-desktop-sub-list-wrap');
    const $listEles = $('.js-header-desktop-sub-list');
    const $listLinkEles = $('.js-header-list-link')

    $('.js-header-list-link').on('mouseenter', function () {
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) { return }

        const index = $(this).data('index');

        _handle($listLinkEles, activeClass, index)
        _handle($listEles, activeClass, index)

        const $listEle = $(`.js-header-desktop-sub-list[data-index='${index}']`);
        const hasChild = $listEle.length > 0;

        if (hasChild) {
            $listWrapEle.addClass(activeClass)
            return;
        }

        $listWrapEle.removeClass(activeClass)

        function _handle($eles, activeClass, i) {
            $eles.each(function () {
                if ($(this).data('index') == i) {
                    $(this).addClass(activeClass)
                    return;
                }
                $(this).removeClass(activeClass)
            })
        }
    }).on('mouseleave', function (e) {
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) { return }

        const $toElement = $(e.toElement)

        if ($toElement.hasClass('js-header-desktop-sub-list')) { return; }

        $(this).removeClass(activeClass)
        $listWrapEle.removeClass(activeClass)
        $listEles.removeClass(activeClass)
    })
}

function handleListLinkClick() {
    $('.js-header-list-link').on('click', function (e) {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 992) { return }
        
        e.preventDefault();
        const activeClass = 'active';
        const $listLinkEles = $('.js-header-list-link')
        const $mobileSubListWrapEles = $('.js-header-mobile-sub-list-wrap');
        const index = $(this).data('index');
        const $subListWrapEle = $(`.js-header-mobile-sub-list-wrap[data-index='${index}']`);

        let hasChild = $subListWrapEle.length > 0;
        if (!hasChild) {
            const hrefValue = $(this).attr('href');
            window.location.href = hrefValue;
            return;
        }

        _handle($listLinkEles, activeClass, index, true)
        _handle($mobileSubListWrapEles, activeClass, index)

        function _handle($eles, activeClass, i, isLinkEle = false) {
            $eles.each(function () {
                const $ele = $(this);

                if ($ele.data('index') == i) {
                    if (isLinkEle) { handleHeaderListLinkStatus($ele) }
                    $ele.toggleClass(activeClass)
                    return;
                }

                if (isLinkEle) { handleHeaderListLinkStatus($ele, 2) }
                $ele.removeClass(activeClass)
            })
        }
    })
}

function handleInnerListWrapMouseEnter() {
    $('.js-header-desktop-sub-list-wrap').on('mouseenter', function (e) {
        const target = e.target;
        if ($(target).hasClass('js-header-desktop-sub-list')) { return; }

        const activeClass = 'active';
        const $listWrapEle = $('.js-header-desktop-sub-list-wrap');
        $listWrapEle.removeClass(activeClass)
    })
}

function handleInnerListMouseLeave() {
    $('.js-header-desktop-sub-list').on('mouseleave', function (e) {
        const target = e.target;
        if ($(target).hasClass('js-header-list-link')) { return; }

        const activeClass = 'active';
        $(this).removeClass(activeClass);
        $('.js-header-desktop-sub-list-wrap').removeClass(activeClass)
        $('.js-header-list-link').removeClass(activeClass)
    })
}

function handleWindowResize() {
    $(window).on('resize', function () {
        resetHeaderStatus()
    })
}

function resetHeaderStatus() {
    const activeClass = 'active';
    $('.js-header').removeClass('hide')
    $('.js-header-list-link').removeClass(activeClass)
    $('.js-header-desktop-sub-list-wrap').removeClass(activeClass)
    $('.js-header-mobile-sub-list-wrap').removeClass(activeClass)
    $('.js-header-list-wrap').removeClass(activeClass);
    $('.js-header-mobile-mask').removeClass(activeClass);
    $('.js-header-burger-link').removeClass(activeClass)
}

function handleHeaderWheel() {
    const $headerEle = $('.js-header')
    if ($headerEle.length == 0) { return }

    $(window).bind('mousewheel', function (e) {
        if (window.innerWidth < 992) { return; }

        const hideClass = "hide";
        const activeClass = 'active';
        const windowHeight = window.innerHeight;
        const pageHeight = $('html').outerHeight();

        if (pageHeight <= windowHeight) { return; }

        if (e.originalEvent.wheelDelta / 120 > 0) {
            $headerEle.removeClass(hideClass)
            return;
        }

        if ($(window).scrollTop() < 100) { return }

        if ($('.js-header-desktop-sub-list-wrap').hasClass(activeClass)) { return; }
        $headerEle.addClass(hideClass)
    });
}

function handleHeaderScroll() {
    const $headerEle = $('.js-header')
    if ($headerEle.length == 0) { return }

    $(window).scroll(function () {
        if (window.innerWidth < 992) { return; }

        const hideClass = "hide";
        const scrollTop = $(window).scrollTop();
        if (scrollTop < 100) {
            $headerEle.removeClass(hideClass)
            return;
        }
    });
}

function handleHeaderListLinkStatus($ele, action = -1) {
    const status = $ele.attr('data-status');
    if (!status) { return; }

    switch (action) {
        case 1:
            $ele.attr('data-status', "－")
            break;
        case 2:
            $ele.attr('data-status', "＋")
            break;
        default:
            if (status == '＋') {
                $ele.attr('data-status', "－")
                return;
            }
            $ele.attr('data-status', "＋")
            break;
    }
}