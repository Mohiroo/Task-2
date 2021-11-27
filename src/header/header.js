let $ = require( "jquery" );

let header_button = $(".header__icon")
let header_menu = $(".header__menu")

header_button.on("click", function() {
  if (header_menu.css("display") == "none") {
    header_menu.css("display", "block")
  } else {
    header_menu.css("display", "none")
  }
})
