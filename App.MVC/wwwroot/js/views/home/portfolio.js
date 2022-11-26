
$(function () {
    handleMansory();
})


function handleMansory() {
    const $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });
}
