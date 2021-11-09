var $ = require( "jquery" );

let caledarButton = $(".find-room__dropdown-button")
let calendar = $(".calendar")

caledarButton.on('click', function() {
  calendar.toggleClass("calendar-active")
})