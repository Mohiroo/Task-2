import $ from 'jquery';

const expandableToggle = $(".expandable-checkbox__toggle");
const expandableToggleArrow = $('.expandable-checkbox__toggle-button');
const expandableToggleActive = 'expandable-checkbox__toggle-button-active';
const expandableList = $(".expandable-checkbox__list");

expandableToggle.on('click', function () {
  expandableToggleArrow.toggleClass(expandableToggleActive);
  expandableList.toggle();
});