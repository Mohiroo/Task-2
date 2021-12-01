let $ = require( "jquery" );

let filter_button = $(".filters__button")
let filters_list = $(".filters__list")

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