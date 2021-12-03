import "../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min"

let $ = require( "jquery" );

let slider = $(".range-slider__slider")
let value = $(".range-slider__value")

slider.ionRangeSlider({
    type: "double",
    min: 500,
    max: 15500,
    from: 5000,
    to: 10000,
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    onStart: function (data) {
        value.text(`${data.from.toLocaleString('ru')}₽ - ${data.to.toLocaleString('ru')}₽`);
    },
    onChange: function (data) {
        value.text(`${data.from.toLocaleString('ru')}₽ - ${data.to.toLocaleString('ru')}₽`);
    },
});