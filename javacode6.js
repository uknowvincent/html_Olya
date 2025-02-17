$(document).ready(function() {
  var $slider = $('.landing .slider');
  var maxItems = $('.item', $slider).length;

  // Инициализация основного слайдера
  $slider.addClass('landing-left').slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 1000,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
  });

  // Инициализация правого слайдера
  var $sliderRight = $('.landing').clone().addClass('landing-right').appendTo($('.split-landing'));
  var rightItems = $('.item', $sliderRight).toArray();
  var reverseItems = rightItems.reverse();
  $('.slider', $sliderRight).html('');
  for (var i = 0; i < maxItems; i++) {
    $(reverseItems[i]).appendTo($('.slider', $sliderRight));
  }

  $('.landing-right .slider').slick({
    swipe: false,
    vertical: true,
    arrows: false,
    infinite: true,
    speed: 950,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    initialSlide: maxItems - 1
  });
});
