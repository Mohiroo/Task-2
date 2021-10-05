var $ = require( "jquery" );
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";

$(".date-dropdown__button").on('click', function(){
  flatpickr(".date-dropdown__date", {
    dateFormat: 'd.m.Y',
    minDate: "today",
    "locale": Russian,
    clickOpens: false,
  }).open();
});