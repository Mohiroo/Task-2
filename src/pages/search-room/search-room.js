import "../../cards/calendar/calendar";
import "../../cards/room-card/room-card";
import "../../components/dropdown-guests/dropdown-guests"
import "../../components/range-slider/range-slider.js";

let $ = require( "jquery" );

let filter_button = $(".filters__button")
let filters_list = $(".filters__list")

let caledarButton = $(".filter-date-dropdown__button")
let calendar = $(".calendar")

caledarButton.on('click', function() {
  calendar.toggleClass("calendar-active")
})

filter_button.on("click", function() {
  if (filters_list.css("display") == "none") {
    filters_list.css("display", "block")
  } else {
    filters_list.css("display", "none")
  }
})

$(window).resize(function () {
  if ($(window).width() > 940) {
    filters_list.css("display", "block")
  } else {
    filters_list.css("display", "none")
  }
});