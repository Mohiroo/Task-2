var $ = require( "jquery" );

$(".expandable-checkbox__button").on('click', function(){
  $(".expandable-checkbox__list").toggleClass("expandable-checkbox__list_enable")
  $(".expandable-checkbox__button").toggleClass("expandable-checkbox__button_enable")
})