var $ = require( "jquery" );
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";



$(".filter-date-dropdown__button").on('click', function(){
  flatpickr(".filter-date-dropdown__date", {
    mode: "range",
    dateFormat: "d M",
    minDate: "today",
    "locale": Russian,
    clickOpens: false,
  }).open();
});