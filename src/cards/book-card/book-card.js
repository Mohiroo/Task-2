import "../../cards/calendar/calendar";
import "../../components/dropdown-guests/dropdown-guests";
import "../../components/date-dropdown/date-dropdown";

import $ from 'jquery';

const calendarButtonApply = $(".calendar__button-apply");

const dateDropdownButton = $('.date-dropdown__button');
const dateDropdownButtonActive = 'date-dropdown__button-active';

const daysInfo = $(".amaunt-days__info");
const servicesInfo = $(".services__info");

const daysSum = $(".amaunt-days__sum");
const servicesSum = $(".services__sum");
const addServicesSum = $(".add-services__sum");
const totalSum = $(".total__sum");

let priceForDay = +($(".info__text-bold").text().replace("₽", "").replace(" ", ""));
let servicesTax = 0;
let addServicesTax = 300;
let discountOfServices = 2179;
let total = 0;

// Функция - Существительное относительно количества дней
const getNoun = (days) => days == 1 ? 'сутки' : 'суток';

// Функция - Создание меню по умолчанию
function setStartInfo() {
  daysInfo.text(`${priceForDay.toLocaleString()}₽ х 0 ${getNoun(window.days)}`);
  daysSum.text(`0₽`);

  servicesInfo.text(`Сбор за услуги: скидка ${discountOfServices.toLocaleString()}₽`);
  servicesSum.text(`${servicesTax.toLocaleString()}₽`);

  addServicesSum.text(`${addServicesTax.toLocaleString()}₽`);

  totalSum.text(`${total}₽`);
};

// Функция - Подтверждение введенных данных и установка положения по умолчаю кнопки меню
calendarButtonApply.on("click", function () {
  dateDropdownButton.toggleClass(dateDropdownButtonActive);

  setTimeout(() => {
    if (days > 0) {
      let sumDays = days * priceForDay;
      total = sumDays + servicesTax + addServicesTax - discountOfServices;

      daysInfo.text(`${priceForDay.toLocaleString()}₽ х ${window.days} ${getNoun(window.days)}`);
      daysSum.text(`${sumDays.toLocaleString()}₽`);
      totalSum.text(`${total.toLocaleString()}₽`);
    };
  }, 100);
});

// Создание меню
setStartInfo();