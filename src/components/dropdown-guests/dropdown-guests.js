import $ from 'jquery';

const guestsButtons = $(".guests-menu__button");
const guestsSelector = $(".dropdown-guests__selector");
const guestsMenu = $(".dropdown-guests__menu");
const buttonOpen = $(".dropdown-guests__button");
const buttonClear = $(".guests__button-clear");
const buttonApply = $(".guests__button-apply");

const dropdownGuestsButton = $('.dropdown-guests__button');
const dropdownGuestsButtonActive = 'dropdown-guests__button-active';

const mainText = $(".dropdown-guests__text");

const adultButtonMinus = $(".adult__minus");
const adultCount = $(".adult__count");
const adultButtonPlus = $(".adult__plus");

const childrenButtonMinus = $(".children__minus");
const childrenCount = $(".children__count");
const childrenButtonPlus = $(".children__plus");

const infantsButtonMinus = $(".infants__minus");
const infantsCount = $(".infants__count");
const infantsButtonPlus = $(".infants__plus");

let adult = 0;
let children = 0;
let infants = 0;

// Создание меню
buttonOpen.on('click', function () {
  createMenu();
});

// Кнопки по категориям
adultButtonMinus.on('click', function () {
  minusCount("adult");
});
adultButtonPlus.on('click', function () {
  plusCount("adult");
});
childrenButtonMinus.on('click', function () {
  minusCount("children");
});
childrenButtonPlus.on('click', function () {
  plusCount("children");
});
infantsButtonMinus.on('click', function () {
  minusCount("infants");
});
infantsButtonPlus.on('click', function () {
  plusCount("infants");
});

// Подтверждение введенных данных
buttonApply.on('click', function () {
  dropdownGuestsButton.toggleClass(dropdownGuestsButtonActive);

  guestsSelector.toggleClass(" dropdown-guests__selector-active");
  guestsMenu.toggleClass(" dropdown-guests__menu-active");

  getText();
});

// Очистка меню
buttonClear.on("click", function () {
  refreshMenu();
});

// Отображать или нет кнопку очистки меню
guestsButtons.on('click', function () {
  if (adult + children + infants == 0) {
    buttonClear.addClass("guests__button-disable");
  } else {
    buttonClear.removeClass("guests__button-disable");
  };

  getText();
});

// Положение по умолчаю кнопки меню
dropdownGuestsButton.on("click", function () {
  dropdownGuestsButton.toggleClass(dropdownGuestsButtonActive);
});

// Функция - создание меню
function createMenu() {
  guestsSelector.toggleClass("dropdown-guests__selector-active");
  guestsMenu.toggleClass("dropdown-guests__menu-active");

  adultCount.text(adult);
  childrenCount.text(children);
  infantsCount.text(infants);

  // Установка неактивных кнопок по категориям
  if (adult == 0) {
    adultButtonMinus.addClass("guests__minus-inactive");
  }
  if (children == 0) {
    childrenButtonMinus.addClass("guests__minus-inactive");
  }
  if (infants == 0) {
    infantsButtonMinus.addClass("guests__minus-inactive");
  };

  getText();
}

// Функция - очистка меню
function refreshMenu() {
  adult = 0;
  children = 0;
  infants = 0;

  mainText.text("Сколько гостей");

  adultCount.text(adult);
  childrenCount.text(children);
  infantsCount.text(infants);

  if (adult == 0) {
    adultButtonMinus.addClass("guests__minus-inactive");
  };
  if (children == 0) {
    childrenButtonMinus.addClass("guests__minus-inactive");
  };
  if (infants == 0) {
    infantsButtonMinus.addClass("guests__minus-inactive");
  };

  buttonClear.addClass("guests__button-disable");
};

// Функция - кнопка-минус по категориям
function minusCount(category) {
  if (category == "adult") {
    if (adult > 0) {
      adult--;
      adultCount.text(adult);
    };
    if (adult == 0) {
      adultButtonMinus.addClass("guests__minus-inactive");
    };
  } else if (category == "children") {
    if (children > 0) {
      children--;
      childrenCount.text(children);
    };
    if (children == 0) {
      childrenButtonMinus.addClass("guests__minus-inactive");
    };
  } else if (category == "infants") {
    if (infants > 0) {
      infants--;
      infantsCount.text(infants);
    };
    if (infants == 0) {
      infantsButtonMinus.addClass("guests__minus-inactive");
    };
  };
};

// Функция - кнопка-плюс по категориям
function plusCount(category) {
  if (category == "adult") {
    if (adult == 0) {
      adultButtonMinus.removeClass("guests__minus-inactive");
    };

    adult++;
    adultCount.text(adult);
  } else if (category == "children") {
    if (children == 0) {
      childrenButtonMinus.removeClass("guests__minus-inactive");
    };

    children++;
    childrenCount.text(children);
  } else if (category == "infants") {
    if (adult !== 0) {
      if (infants == 0) {
        infantsButtonMinus.removeClass("guests__minus-inactive");
      };
  
      infants++;
      infantsCount.text(infants);
    };
  };
};

// Тест в строке меню
function getText() {
  let guestCount = adult + children;

  if (guestCount > 0 && infants > 0) {
    mainText.text(`${guestCount} ${getNoun("guest", guestCount)}, ${infants} ${getNoun("no-guest", infants)}`);
  } else if (guestCount > 0 && infants === 0) {
    mainText.text(`${guestCount} ${getNoun("guest", guestCount)}`);
  } else {
    mainText.text("Сколько гостей");
  };
}

// Существительное относительно количества гостй
function getNoun(isGuest, count) {
  let countArray = String(count).split('');
  let lastNumber = parseInt(countArray[countArray.length - 1]);

  if (isGuest === "guest") {
    if (lastNumber === 1) {
      if (count == 11) {
        return "гостей";
      } else {
        return "гость";
      };
    } else if (lastNumber > 1 && lastNumber < 5) {
      if (count > 11 && count < 16) {
        return "гостей";
      } else {
        return "гостя";
      };
    } else {
      return "гостей";
    };
  } else {
    if (lastNumber === 1) {
      if (count == 11) {
        return "младенцев";
      } else {
        return "младенец";
      };
    } else if (lastNumber > 1 && lastNumber < 5) {
      if (count > 11 && count < 16) {
        return "младенцев";
      } else {
        return "младенца";
      }
    } else {
      return "младенцев";
    };
  };
};