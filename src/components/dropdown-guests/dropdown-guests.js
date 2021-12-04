let $ = require( "jquery" );

let guests_buttons = $(".guests-menu__button");
let guests_selector = $(".dropdown-guests__selector");
let guests_menu = $(".dropdown-guests__menu");
let button_open = $(".dropdown-guests__button");
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
  let people = adult + children + infants
  
  if (people == 0) {
    button_clear.addClass("guests__button-disable")
  } else {
    button_clear.removeClass("guests__button-disable")
  }

  getText()
});

button_apply.on('click', function() {
  guests_selector.toggleClass(" dropdown-guests__selector-active")
  guests_menu.toggleClass(" dropdown-guests__menu-active")

  getText()
})

button_clear.on("click", function() {
  refreshMenu();
})

function createMenu() {
  guests_selector.toggleClass(" dropdown-guests__selector-active")
  guests_menu.toggleClass(" dropdown-guests__menu-active")

  adultCount.text(adult)
  childrenCount.text(children)
  infantsCount.text(infants)

  if (adult == 0) {
    adultButtonMinus.addClass("guests__minus-inactive");
  }
  if (children == 0) {
    childrenButtonMinus.addClass("guests__minus-inactive");
  }
  if (infants == 0) {
    infantsButtonMinus.addClass("guests__minus-inactive");
  }
  
  getText()
}

function refreshMenu() {
  adult = 0;
  children = 0;
  infants = 0;

  mainText.text("Сколько гостей");
  
  adultCount.text(adult)
  childrenCount.text(children)
  infantsCount.text(infants)

  if (adult == 0) {
    adultButtonMinus.addClass("guests__minus-inactive");
  }
  if (children == 0) {
    childrenButtonMinus.addClass("guests__minus-inactive");
  }
  if (infants == 0) {
    infantsButtonMinus.addClass("guests__minus-inactive");
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

function getText () {
  let guestCount = adult + children

  if (guestCount > 0) {
    if (infants > 0) {
      mainText.text(`${guestCount} ${getNoun("guest", guestCount)}, ${infants} ${getNoun("no-guest", infants)}`);
    } else {
      mainText.text(`${guestCount} ${getNoun("guest", guestCount)}`);
    }
  } else {
    mainText.text("Сколько гостей")
  }
}

function getNoun(isGuest, count) {
  if (isGuest === "guest") {
    let countArray = String(count).split('')
    let lastNumber = parseInt(countArray[countArray.length - 1])
  
    if (lastNumber === 1) {
      if (count == 11) {
        return "гостей"
      } else {
        return "гость"
      }
    } else if (lastNumber > 1 && lastNumber < 5 ) {
      if (count > 11 && count < 16) {
        return "гостей"
      } else {
        return "гостя"
      }
    } else  {
      return "гостей"
    }
  } else {
    let countArray = String(count).split('')
    let lastNumber = parseInt(countArray[countArray.length - 1])

    if (lastNumber === 1) {
      if (count == 11) {
        return "младенцев"
      } else {
        return "младенец"
      }
    } else if (lastNumber > 1 && lastNumber < 5 ) {
      if (count > 11 && count < 16) {
        return "младенцев"
      } else {
        return "младенца"
      }
    } else {
      return "младенцев"
    }
  }
}