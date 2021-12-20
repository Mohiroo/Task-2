import "../../cards/calendar/calendar"

let $ = require( "jquery" );

let date_button = $(".calendar__button-apply");

let days_info = $(".amaunt-days__info");
let days_sum = $(".amaunt-days__sum");
let services_info = $(".services__info");
let services_sum = $(".services__sum");
let add_services_sum = $(".add-services__sum");
let total_sum = $(".total__sum");

let priceForDay = parseInt($(".info__text-bold").text().replace("₽", "").replace(" ", ""));
let servicesTax = 0;
let addServicesTax = 300;
let discountOfServices = 2179;
let total = 0;

days_info.text(`${priceForDay.toLocaleString()}₽ х 0 ${getNoun(window.days)}`);
days_sum.text(`0₽`);
services_info.text(`Сбор за услуги: скидка ${discountOfServices.toLocaleString()}₽`);
services_sum.text(`${servicesTax.toLocaleString()}₽`);
add_services_sum.text(`${addServicesTax.toLocaleString()}₽`)
total_sum.text(`${total}₽`)

date_button.on("click", function() {
  setTimeout(() => { 
    if (days > 0) {
      let sumDays = days * priceForDay;
      total = sumDays + servicesTax + addServicesTax - discountOfServices
      
      days_info.text(`${priceForDay.toLocaleString()}₽ х ${window.days} ${getNoun(window.days)}`);
      days_sum.text(`${sumDays.toLocaleString()}₽`)
      total_sum.text(`${total.toLocaleString()}₽`);
    }
  }, 100);
})

function getNoun(days) {
  if (days == 1) {
    return "сутки"
  } else {
    return "суток"
  }
}