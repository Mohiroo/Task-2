import $ from 'jquery';

const dateDropdownButton = $('.date-dropdown__button');
const dateDropdownButtonActive = 'date-dropdown__button-active';

dateDropdownButton.on("click", function () {
  dateDropdownButton.toggleClass(dateDropdownButtonActive);
});