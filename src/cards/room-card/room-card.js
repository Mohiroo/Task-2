let $ = require( "jquery" );

let room_card = $(".room-card")
let wrapper = $(".slider__wrapper");
let buttonNext = $(".slider__button-next");
let buttonPrev = $(".slider__button-prev");
let indicators = $(".slider__indicator");
let indicator_1 = $(".slider__indicator-1");
let indicator_2 = $(".slider__indicator-2");
let indicator_3 = $(".slider__indicator-3");
let indicator_4 = $(".slider__indicator-4");

wrapper.css("transform", "matrix(1, 0, 0, 1, 0, 0)")

let cardIndex
let translateValue

room_card.on("click", function() { 
  cardIndex = $(this).index()
  let localTranslateValue = parseInt(room_card.eq(cardIndex).find(wrapper).css("transform").match(/(-?[0-9\.]+)/g)[4])

  if (localTranslateValue % 270 === 0) {
    translateValue = localTranslateValue
  }
})
buttonNext.on('click', function() { move("next") });
buttonPrev.on('click', function() { move("back") });

indicator_1.on('click', function() { moveToIndicator(1) });
indicator_2.on('click', function() { moveToIndicator(2) });
indicator_3.on('click', function() { moveToIndicator(3) });
indicator_4.on('click', function() { moveToIndicator(4) });

function move(direction) {
  setTimeout(() => { 
    // установка шага в зависимости от направления
    let step = direction === 'next' ? -270 : 270;

    // рассчет расстояния
    if (translateValue == 0 && direction == "back") {
      translateValue = -810;
    } else if (translateValue == -810 && direction == "next") {
      translateValue = 0;
    } else {
      translateValue = translateValue + step;
    }

    console.log(translateValue);

    // передвижение
    room_card.eq(cardIndex).find(wrapper).css("transform", "matrix(1, 0, 0, 1, " + translateValue + ", 0)")

    changeIndicator();
  }, 100);
}

// Передвижение по нажатию на интикатор
function moveToIndicator(indicator) { 
  setTimeout(() => { 
  if (indicator == 1) { translateValue = 0}
  if (indicator == 2) { translateValue = -270}
  if (indicator == 3) { translateValue = -540}
  if (indicator == 4) { translateValue = -810}

  room_card.eq(cardIndex).find(wrapper).css("transform", "matrix(1, 0, 0, 1, " + translateValue + ", 0)")
  changeIndicator()
  }, 100);
}

// Изменение индикатора
function changeIndicator() {
  room_card.eq(cardIndex).find(indicators).removeClass("slider__indicator-active");

  if (translateValue == 0) {
    room_card.eq(cardIndex).find(indicator_1).addClass("slider__indicator-active")
  } else if (translateValue == -270) {
    room_card.eq(cardIndex).find(indicator_2).addClass("slider__indicator-active")
  } else if (translateValue == -540) {
    room_card.eq(cardIndex).find(indicator_3).addClass("slider__indicator-active")
  } else if (translateValue == -810) {
    room_card.eq(cardIndex).find(indicator_4).addClass("slider__indicator-active")
  }
}