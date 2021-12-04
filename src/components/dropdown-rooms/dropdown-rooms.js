let $ = require( "jquery" );

let dropdown_rooms = $(".dropdown-rooms");
let button_open = $(".dropdown-rooms__button");

let mainText = $(".dropdown-rooms__text")

let bedroomsButtonMinus = $(".bedrooms__minus");
let bedroomsCount = $(".bedrooms__count");
let bedroomsButtonPlus = $(".bedrooms__plus")

let bedsButtonMinus = $(".beds__minus");
let bedsCount = $(".beds__count");
let bedsButtonPlus = $(".beds__plus");

let bathroomsButtonMinus = $(".bathrooms__minus");
let bathroomsCount = $(".bathrooms__count");
let bathroomsButtonPlus = $(".bathrooms__plus");

let bedrooms = 0;
let beds = 0;
let bathrooms = 0;

button_open.on("click", function() {
  createMenu()
})

bedroomsButtonMinus.on("click", function() { minusCount("bedrooms") })
bedroomsButtonPlus.on("click", function() { plusCount("bedrooms")})
bedsButtonMinus.on("click", function() { minusCount("beds") })
bedsButtonPlus.on("click", function() { plusCount("beds")})
bathroomsButtonMinus.on("click", function() { minusCount("bathrooms") })
bathroomsButtonPlus.on("click", function() { plusCount("bathrooms")})

function createMenu() {
  dropdown_rooms.toggleClass(" dropdown-rooms-active")

  bedroomsCount.text(bedrooms)
  bedsCount.text(beds)
  bathroomsCount.text(bathrooms)

  if (bedrooms == 0) {
    bedroomsButtonMinus.addClass(" rooms__minus-inactive");
  }
  if (beds == 0) {
    bedsButtonMinus.addClass(" rooms__minus-inactive");
  }
  if (bathrooms == 0) {
    bathroomsButtonMinus.addClass(" rooms__minus-inactive");
  }

  getText()
}

function minusCount(category) {
  if (category == "bedrooms") {
    if (bedrooms > 0) {
      bedrooms = bedrooms - 1
      bedroomsCount.text(bedrooms);
    }
    if (bedrooms == 0) {
      bedroomsButtonMinus.addClass("rooms__minus-inactive");
    }
  } else if (category == "beds") {
    if (beds > 0) {
      beds = beds - 1
      bedsCount.text(beds);
    }
    if (beds == 0) {
      bedsButtonMinus.addClass("rooms__minus-inactive");
    }
  } else if (category == "bathrooms") {
    if (bathrooms > 0) {
      bathrooms = bathrooms - 1
      bathroomsCount.text(bathrooms);
    }
    if (bathrooms == 0) {
      bathroomsButtonMinus.addClass("rooms__minus-inactive");
    }
  }
  getText()
}

function plusCount(category) {

  if (category == "bedrooms") {
    if (bedrooms == 0) {
      bedroomsButtonMinus.removeClass("rooms__minus-inactive");
    }

    bedrooms = bedrooms + 1;
    bedroomsCount.text(bedrooms);
  } else if (category == "beds") {
    if (beds == 0) {
      bedsButtonMinus.removeClass("rooms__minus-inactive");
    }

    beds = beds + 1;
    bedsCount.text(beds);
  } else if (category == "bathrooms") {
    if (bathrooms == 0) {
      bathroomsButtonMinus.removeClass("rooms__minus-inactive");
    }

    bathrooms = bathrooms + 1;
    bathroomsCount.text(bathrooms);
  }
  getText()
}

function getText () {
  if (beds + bedrooms + bathrooms > 0 && beds != 0 && bedrooms != 0 && bathrooms != 0) {
    mainText.text(`${bedrooms} ${getNoun("bedrooms", bedrooms)}, ${beds} ${getNoun("beds", beds)}...`)
  } else if (bedrooms != 0) {
    if (beds == 0 && bathrooms == 0) {
      mainText.text(`${bedrooms} ${getNoun("bedrooms", bedrooms)}`)
    } else if (beds != 0 && bathrooms == 0) {
      mainText.text(`${bedrooms} ${getNoun("bedrooms", bedrooms)}, ${beds} ${getNoun("beds", beds)}`)
    } else if (beds == 0 && bathrooms != 0) {
      mainText.text(`${bedrooms} ${getNoun("bedrooms", bedrooms)}, ${bathrooms} ${getNoun("bathrooms", bathrooms, "short")}`)
    }
  } else if (beds != 0) {
    if (bedrooms == 0 && bathrooms == 0) {
      mainText.text(`${beds} ${getNoun("beds", beds)}`)
    } else if (bedrooms == 0 && bathrooms != 0) {
      mainText.text(`${beds} ${getNoun("beds", beds)}, ${bathrooms} ${getNoun("bathrooms", bathrooms, "short")}`)
    }
  } else if (bathrooms != 0 && bedrooms == 0 && beds == 0) {
    mainText.text(`${bathrooms} ${getNoun("bathrooms", bathrooms, "full")}`);
  } else {
    mainText.text("Выберите комнаты")
  }
}

function getNoun(category, count, mode) {
  let countArray = String(count).split('')
  let lastNumber = parseInt(countArray[countArray.length - 1])

  if (category === "bedrooms") {  
    if (lastNumber == 1) {
      if (count == 11) {
        return "спален"
      } else {
        return "спальня"
      }
    } else if (lastNumber > 1 && lastNumber < 5 ) {
      if (count > 11 && count < 16) {
        return "спален"
      } else {
        return "спальни"
      }
    } else  {
      return "спален"
    }
  } else if (category == "beds") {
    if (lastNumber == 1) {
      if (count == 11) {
        return "кроватей"
      } else {
        return "кровать"
      }
    } else if (lastNumber > 1 && lastNumber < 5 ) {
      if (count > 11 && count < 16) {
        return "кроватей"
      } else {
        return "кровати"
      }
    } else {
      return "кроватей"
    }
  } else if (category == "bathrooms") {
    if (mode == "short") {
      if (lastNumber == 1) {
        if (count == 11) {
          return "ванных..."
        } else {
          return "ванная..."
        }
      } else {
        return "ванных..."
      }
    } else {
      if (lastNumber == 1) {
        if (count == 11) {
          return "ванных комнат"
        } else {
          return "ванная комната"
        }
      } else if (lastNumber > 1 && lastNumber < 5 ) {
        if (count > 11 && count < 16) {
          return "ванных комнат"
        } else {
          return "ванных комнаты"
        }
      } else {
        return "ванных комнат"
      }
    }
  }
}