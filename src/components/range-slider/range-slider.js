var $ = require( "jquery" );
import "../../../node_modules/ion-rangeslider/js/ion.rangeSlider.min"

$(".range-slider__slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15000,
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    postfix: " $",
    onStart: function (data) {
        $(".range-slider__value").text(data.min + "₽ - " + data.max + "₽");
    },
    onChange: function (data) {
        $(".range-slider__value").text(data.from + "₽ - " + data.to + "₽");
    },
});