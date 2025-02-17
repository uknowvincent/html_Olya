var $slider = $('.landing .slider'),
    maxItems = $('.item', $slider).length,
    dragging = false,
    tracking,
    rightTracking;

$sliderRight = $('.landing').clone().addClass('landing-right').appendTo($('.split-landing'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');

for (i = 0; i < maxItems; i++) {
    $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('landing-left');

$('.landing-left').slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 1000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
        $('.landing-right .slider').slick('slickGoTo', -1);
        $('.landing-text').slick('slickGoTo', maxItems);
        $('.landing-p').slick('slickGoTo', maxItems);
    } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
        $('.landing-right .slider').slick('slickGoTo', maxItems);
        $('.landing-text').slick('slickGoTo', -1);
        $('.landing-p').slick('slickGoTo', -1);
    } else {
        $('.landing-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
        $('.landing-text').slick('slickGoTo', nextSlide);
        $('.landing-p').slick('slickGoTo', nextSlide);
    }
}).on("mousewheel", function(event) {
    event.preventDefault();
    if (event.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
    } else {
        $(this).slick('slickNext');
    }
});

$('.landing-right .slider').slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 950,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    initialSlide: maxItems - 1
});

// Слайдеры для текста
$('.landing-text').slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 900,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

$('.landing-p').slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 900,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});
