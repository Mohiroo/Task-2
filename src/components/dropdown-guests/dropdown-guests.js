let $ = require( "jquery" );

let guests_buttons = $(".guests-menu__button");
let guests_main = $(".dropdown-guests__main");
let guests_menu = $(".dropdown-guests__menu");
let button_open = $(".guests__button");
let button_clear = $(".guests__button-clear")
let button_apply = $(".guests__button-apply")

let mainText = $(".dropdown-guests__text")

let adultButtonMinus = $(".adult__minus");
let adultCount = $(".adult__count");
let adultButtonPlus = $(".adult__plus")

let childrenButtonMinus = $(".children__minus");
let childrenCount = $(".children__count");
let childrenButtonPlus = $(".children__plus");

let infantsButtonMinus = $(".infants__minus");
let infantsCount = $(".infants__count");
let infantsButtonPlus = $(".infants__plus");

let adult = 0;
let children = 0;
let infants = 0;

button_open.on('click', function(){
  createMenu()
});

adultButtonMinus.on('click', function(){ minusCount("adult") })
adultButtonPlus.on('click', function(){ plusCount("adult")})
childrenButtonMinus.on('click', function(){ minusCount("children") })
childrenButtonPlus.on('click', function(){ plusCount("children")})
infantsButtonMinus.on('click', function(){ minusCount("infants") })
infantsButtonPlus.on('click', function(){ plusCount("infants")})

guests_buttons.on('click', function(){
  let guestsCount = adult + children + infants
  
  if (guestsCount == 0) {
    $(".dropdown-guests__text").text("Сколько гостей");
    button_clear.addClass("guests__button-disable")
  } else {
   button_clear.removeClass("guests__button-disable")
  }
});

button_apply.on('click', function() {
  let guestCount = adult + children + infants

  mainText.text(`${guestCount} ${getNoun(guestCount)}`);
})

button_clear.on("click", function() {
  adult = 0;
  children = 0;
  infants = 0;

  createMenu();  
})

function createMenu() {
  let guestCount = adult + children + infants

  guests_main.toggleClass("active-dropdown-guests__main")
  guests_menu.toggleClass("dropdown-guests__menu-active")

  adultCount.text(adult)
  childrenCount.text(children)
  infantsCount.text(infants)

  adultButtonMinus.addClass("guests__minus-inactive");
  childrenButtonMinus.addClass("guests__minus-inactive");
  infantsButtonMinus.addClass("guests__minus-inactive");

  if (guestCount == 0) {
    mainText.text("Сколько гостей");
  } else {
    mainText.text(`${guestCount} ${getNoun(guestCount)}`);
  }
  
}

function minusCount(category) {
  if (category == "adult") {
    if (adult > 0) {
      adult = adult - 1
      adultCount.text(adult);
    }
    if (adult == 0) {
      adultButtonMinus.addClass("guests__minus-inactive");
    }
  } else if (category == "children") {
    if (children > 0) {
      children = children - 1
      childrenCount.text(children);
    }
    if (children == 0) {
      childrenButtonMinus.addClass("guests__minus-inactive");
    }
  } else if (category == "infants") {
    if (infants > 0) {
      infants = infants - 1
      infantsCount.text(infants);
    }
    if (infants == 0) {
      infantsButtonMinus.addClass("guests__minus-inactive");
    }
  }
}

function plusCount(category) {
  if (category == "adult") {
    if (adult == 0) {
      adultButtonMinus.removeClass("guests__minus-inactive");
    }

    adult = adult + 1;

    adultCount.text(adult);
  } else if (category == "children") {
    if (children == 0) {
      childrenButtonMinus.removeClass("guests__minus-inactive");
    }

    children = children + 1;

    childrenCount.text(children);
  } else if (category == "infants") {
    if (infants == 0) {
      infantsButtonMinus.removeClass("guests__minus-inactive");
    }

    infants = infants + 1;

    infantsCount.text(infants);
  }
}

function getNoun(number) {
  if (number == 0) {
    return "гостей"
  } else if (number == 1) {
    return "гость"
  } else if (2 <= number && number <= 4) {
    return "гостя"
  } else if (number > 4) {
    return "гостей"
  }
}