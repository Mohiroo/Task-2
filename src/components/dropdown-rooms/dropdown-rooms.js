var $ = require( "jquery" );

var bedroom = parseInt($(".bedroom-dropdown-rooms__menu-count").text());
var beds = parseInt($(".bed-dropdown-rooms__menu-count").text());
var bathroom = parseInt($(".bathroom-dropdown-rooms__menu-count").text());


$(".dropdown-rooms__button").on('click', function(){
  $(".dropdown-rooms").toggleClass("dropdown-rooms-active")
});

//////////////////////////////////////////////////////////////// bedroom
console.log(bedroom);

$(".bedroom-dropdown-rooms__menu-minus").on('click', function(){
  if (bedroom > 0) {
    bedroom = bedroom - 1
    $(".bedroom-dropdown-rooms__menu-count").text(bedroom);
  }
  if (bedroom == 0) {
    $(".bedroom-dropdown-rooms__menu-minus").addClass("none-dropdown-rooms__menu-minus");
  }

  console.log(bedroom);
});

$(".bedroom-dropdown-rooms__menu-plus").on('click', function(){
  bedroom = bedroom + 1;
  $(".bedroom-dropdown-rooms__menu-count").text(bedroom);
  $(".bedroom-dropdown-rooms__menu-minus").removeClass("none-dropdown-rooms__menu-minus");

  console.log(bedroom);
});

//////////////////////////////////////////////////////////////// beds

$(".bed-dropdown-rooms__menu-minus").on('click', function(){
  if (beds == 1) {
    $(".bed-dropdown-rooms__menu-minus").addClass("none-dropdown-rooms__menu-minus");
  }
  if (beds > 0) {
    beds = beds - 1
    $(".bed-dropdown-rooms__menu-count").text(beds);
  }
});

$(".bed-dropdown-rooms__menu-plus").on('click', function(){
  beds = beds + 1;
  $(".bed-dropdown-rooms__menu-count").text(beds);
  $(".bed-dropdown-rooms__menu-minus").removeClass("none-dropdown-rooms__menu-minus");
});

//////////////////////////////////////////////////////////////// bathroom

$(".bathroom-dropdown-rooms__menu-minus").on('click', function(){
  if (bathroom == 1) {
    $(".bathroom-dropdown-rooms__menu-minus").addClass("none-dropdown-rooms__menu-minus");
  } 
  if (bathroom > 0) {
    bathroom = bathroom - 1
    $(".bathroom-dropdown-rooms__menu-count").text(bathroom);
  }
});

$(".bathroom-dropdown-rooms__menu-plus").on('click', function(){
  bathroom = bathroom + 1;
  $(".bathroom-dropdown-rooms__menu-count").text(bathroom);
  $(".bathroom-dropdown-rooms__menu-minus").removeClass("none-dropdown-rooms__menu-minus");
});


$(".dropdown-rooms__menu-button").on('click', function(){
  var dropdown_rooms__text

  if (bedroom == 0) {
    dropdown_rooms__text = beds + " кровати, " + bathroom + " ванные"
  } else if (beds == 0) {
    dropdown_rooms__text = bedroom + " спальни, " + bathroom + " ванные"
  } else if (bathroom == 0) {
    dropdown_rooms__text = bedroom + " спальни, " + beds + " кровати"
  } else if (bedroom == 0 && beds == 0 && bathroom == 0) {
    dropdown_rooms__text = "Выберите комнаты"
  } else {
    dropdown_rooms__text = bedroom + " спальни, " + beds + " кровати..."
  }

  $(".dropdown-rooms__text").text(dropdown_rooms__text);
});