var $ = require( "jquery" );

var adult = parseInt($(".adult-dropdown-guests__menu-count").text());
var children = parseInt($(".children-dropdown-guests__menu-count").text());
var infants = parseInt($(".infants-dropdown-guests__menu-count").text());

$(".dropdown-guests__button").on('click', function(){
  $(".dropdown-guests").toggleClass("dropdown-guests-active")
});

//////////////////////////////////////////////////////////////// adult

$(".adult-dropdown-guests__menu-minus").on('click', function(){
  if (adult > 0) {
    adult = adult - 1
    $(".adult-dropdown-guests__menu-count").text(adult);
  }
  if (adult == 0) {
    $(".adult-dropdown-guests__menu-minus").addClass("none-dropdown-guests__menu-minus");
  }
});

$(".adult-dropdown-guests__menu-plus").on('click', function(){
  adult = adult + 1;
  $(".adult-dropdown-guests__menu-count").text(adult);
  $(".adult-dropdown-guests__menu-minus").removeClass("none-dropdown-guests__menu-minus");
});

// //////////////////////////////////////////////////////////////// children

$(".children-dropdown-guests__menu-minus").on('click', function(){
  if (children == 1) {
    $(".children-dropdown-guests__menu-minus").addClass("none-dropdown-guests__menu-minus");
  }
  if (children > 0) {
    children = children - 1
    $(".children-dropdown-guests__menu-count").text(children);
  }
});

$(".children-dropdown-guests__menu-plus").on('click', function(){
  children = children + 1;
  $(".children-dropdown-guests__menu-count").text(children);
  $(".children-dropdown-guests__menu-minus").removeClass("none-dropdown-guests__menu-minus");
});

// //////////////////////////////////////////////////////////////// infants

$(".infants-dropdown-guests__menu-minus").on('click', function(){
  if (infants == 1) {
    $(".infants-dropdown-guests__menu-minus").addClass("none-dropdown-guests__menu-minus");
  } 
  if (infants > 0) {
    infants = infants - 1
    $(".infants-dropdown-guests__menu-count").text(infants);
  }
});

$(".infants-dropdown-guests__menu-plus").on('click', function(){
  infants = infants + 1;
  $(".infants-dropdown-guests__menu-count").text(infants);
  $(".infants-dropdown-guests__menu-minus").removeClass("none-dropdown-guests__menu-minus");
});


$(".dropdown-guests__menu-button").on('click', function(){
  var dropdown_guests__count = adult + children + infants
  
  if (dropdown_guests__count == 0) {
    $(".dropdown-guests__text").text("Сколько гостей");
    $(".clear-dropdown-guests__button").addClass("disable-dropdown-guests__button")
  } else {
    $(".dropdown-guests__text").text(dropdown_guests__count + " гостя");
    $(".clear-dropdown-guests__button").removeClass("disable-dropdown-guests__button")
  }
});

$(".clear-dropdown-guests__button").on('click', function(){
  adult = 0
  children = 0
  infants = 0

  $(".adult-dropdown-guests__menu-count").text(adult);
  $(".children-dropdown-guests__menu-count").text(children);
  $(".infants-dropdown-guests__menu-count").text(infants);
  $(".dropdown-guests__text").text("Сколько гостей");

  $(".clear-dropdown-guests__button").removeClass("disable-dropdown-guests__button")
});

