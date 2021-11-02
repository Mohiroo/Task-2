var $ = require( "jquery" );

var translateValue = 0;
var wrapper = $(".slider__wrapper");
var buttonNext = $(".slider__button-next");
var buttonPrev = $(".slider__button-prev");
var indicators = $(".slider__indicator");
var indicator_1 = $(".slider__indicator-1");
var indicator_2 = $(".slider__indicator-2");
var indicator_3 = $(".slider__indicator-3");
var indicator_4 = $(".slider__indicator-4");

buttonNext.on('click', function(){ move("next") });
buttonPrev.on('click', function(){ move("back") });

function move(direction) {
  // установка "шага" в зависимости от направления
  var step = direction === 'next' ? -100 : 100;

  // рассчет расстояния
  if (translateValue == 0 && direction == "back") {
    translateValue = -300;
  } else if (translateValue == -300 && direction == "next") {
    translateValue = 0;
  } else {
    translateValue = translateValue + step;
  }

  // применение расстояния
  if (direction == 'next') {
    wrapper.css("transform", "translateX(" + translateValue + "%)");
    console.log("translateX(" + translateValue + "%)");
  } else {
    wrapper.css("transform", "translateX(" + translateValue + "%)");
    console.log("translateX(" + translateValue + "%)");
  }

  changeIndicator();
}

// Изменение индикатора
function changeIndicator() {
  indicators.removeClass("slider__indicator-active");

  if (translateValue == 0) {
    indicator_1.addClass("slider__indicator-active")
  } else if (translateValue == -100) {
    indicator_2.addClass("slider__indicator-active")
  } else if (translateValue == -200) {
    indicator_3.addClass("slider__indicator-active")
  } else if (translateValue == -300) {
    indicator_4.addClass("slider__indicator-active")
  }
}