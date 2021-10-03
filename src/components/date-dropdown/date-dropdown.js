var $ = require( "jquery" );
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";

flatpickr(".date-dropdown__date", {
  dateFormat: 'd.m.Y',
  minDate: "today",
  "locale": Russian,
  // clickOpens: false,
});

$(".date-dropdown__button").on('click', function(){
  flatpickr.open();
  console.log("123");
})