import '../../components/rate-button/rate-button.scss';
import './room-card.scss';
import $ from "jquery";

const roomCard = $(".room-card")
const sliderWrapper = $(".slider__wrapper");
const buttonNext = $(".slider__button-next");
const buttonPrev = $(".slider__button-prev");
const indicators = $(".slider__indicator");
const indicator1 = $(".slider__indicator-1");
const indicator2 = $(".slider__indicator-2");
const indicator3 = $(".slider__indicator-3");
const indicator4 = $(".slider__indicator-4");

let cardIndex
let translateValue

sliderWrapper.css("transform", "matrix(1, 0, 0, 1, 0, 0)")

roomCard.on("click", function () {
  cardIndex = $(this).index()
  let localTranslateValue = parseInt(roomCard.eq(cardIndex).find(sliderWrapper).css("transform").match(/(-?[0-9\.]+)/g)[4])

  if (localTranslateValue % 270 === 0) {
    translateValue = localTranslateValue
  }
})

buttonNext.on('click', {
  direction: "next"
}, move);
buttonPrev.on('click', {
  direction: "back"
}, move);

indicator1.on('click', {
  indicator: 1
}, moveToIndicator);
indicator2.on('click', {
  indicator: 2
}, moveToIndicator);
indicator3.on('click', {
  indicator: 3
}, moveToIndicator);
indicator4.on('click', {
  indicator: 4
}, moveToIndicator);

function move(event) {
  setTimeout(() => {
    // установка шага в зависимости от направления
    let step = event.data.direction === 'next' ? -270 : 270;

    // рассчет расстояния
    if (translateValue == 0 && event.data.direction == "back") {
      translateValue = -810;
    } else if (translateValue == -810 && event.data.direction == "next") {
      translateValue = 0;
    } else {
      translateValue = translateValue + step;
    }

    // передвижение
    roomCard.eq(cardIndex).find(sliderWrapper).css("transform", "matrix(1, 0, 0, 1, " + translateValue + ", 0)")

    changeIndicator();
  }, 100);
}

// Передвижение по нажатию на интикатор
function moveToIndicator(event) {
  setTimeout(() => {
    if (event.data.indicator == 1) {
      translateValue = 0
    }
    if (event.data.indicator == 2) {
      translateValue = -270
    }
    if (event.data.indicator == 3) {
      translateValue = -540
    }
    if (event.data.indicator == 4) {
      translateValue = -810
    }

    roomCard.eq(cardIndex).find(sliderWrapper).css("transform", "matrix(1, 0, 0, 1, " + translateValue + ", 0)")
    changeIndicator()
  }, 100);
}

// Изменение индикатора
function changeIndicator() {
  roomCard.eq(cardIndex).find(indicators).removeClass("slider__indicator-active");

  if (translateValue == 0) {
    roomCard.eq(cardIndex).find(indicator1).addClass("slider__indicator-active")
  } else if (translateValue == -270) {
    roomCard.eq(cardIndex).find(indicator2).addClass("slider__indicator-active")
  } else if (translateValue == -540) {
    roomCard.eq(cardIndex).find(indicator3).addClass("slider__indicator-active")
  } else if (translateValue == -810) {
    roomCard.eq(cardIndex).find(indicator4).addClass("slider__indicator-active")
  }
}