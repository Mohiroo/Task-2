import $ from 'jquery';

const filterDateButton = $('.filter-date__button');
const filterDateButtonActive = 'filter-date__button-active';
const calendarButtonApply = $(".calendar__button-apply");

filterDateButton.on('click', function () {
  dateText = filterDateText.text();
  filterDateButton.toggleClass(filterDateButtonActive);
});

calendarButtonApply.on('click', function () {
  filterDateButton.toggleClass(filterDateButtonActive);
});