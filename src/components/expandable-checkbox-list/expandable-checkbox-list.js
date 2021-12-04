let $ = require( "jquery" );

let expandable_button = $(".expandable-checkbox__button")
let expandable_list = $(".expandable-checkbox__list")

expandable_button.on('click', function(){
  expandable_list.toggleClass("expandable-checkbox__list_enable")
  expandable_button.toggleClass("expandable-checkbox__button_enable")
})