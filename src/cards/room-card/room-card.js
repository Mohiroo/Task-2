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

indicator_1.on('click', function(){ moveToIndicator(1) });
indicator_2.on('click', function(){ moveToIndicator(2) });
indicator_3.on('click', function(){ moveToIndicator(3) });
indicator_4.on('click', function(){ moveToIndicator(4) });

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
  } else {
    wrapper.css("transform", "translateX(" + translateValue + "%)");
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

// Измненеие фото по нажатию на интикатор
function moveToIndicator(indicator) { 
  if (indicator == 1) { translateValue = 0}
  if (indicator == 2) { translateValue = -100}
  if (indicator == 3) { translateValue = -200}
  if (indicator == 4) { translateValue = -300}

  wrapper.css("transform", "translateX(" + translateValue + "%)");
  changeIndicator()
}