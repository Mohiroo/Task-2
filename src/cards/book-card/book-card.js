import "../../components/buttons/buttons";
import "../../components/date-dropdown/date-dropdown";
import "../../components/dropdown-guests/dropdown-guests";
import "../../cards/calendar/calendar";
import './book-card.scss';

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
let days = +getItem('countDays');
let total = priceForDay * days + servicesTax + addServicesTax - discountOfServices;

// Функция - Существительное относительно количества дней
const getNoun = (daysCount) => daysCount == 1 ? 'сутки' : 'суток';

// Создание меню
setInfo();

// Функция - Создание меню по умолчанию
function setInfo() {
  daysInfo.text(`${priceForDay.toLocaleString()}₽ х ${getItem('countDays')} ${getNoun(+getItem('countDays'))}`);
  daysSum.text(`${(priceForDay * days).toLocaleString()}₽`);

  servicesInfo.text(`Сбор за услуги: скидка ${discountOfServices.toLocaleString()}₽`);
  servicesSum.text(`${servicesTax.toLocaleString()}₽`);

  addServicesSum.text(`${addServicesTax.toLocaleString()}₽`);

  totalSum.text(`${total.toLocaleString()}₽`);
};

// Функция - Подтверждение введенных данных и установка положения по умолчаю кнопки меню
calendarButtonApply.on("click", function () {
  dateDropdownButton.toggleClass(dateDropdownButtonActive);

  days = +getItem('countDays');
  total = priceForDay * days + servicesTax + addServicesTax - discountOfServices

  setInfo();
});

function getItem(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch (e) {
    console.log(e);
  }
};