import '../buttons/buttons';
import './expandable-checkbox-list.scss';
import $ from 'jquery';

const expandableToggle = $(".expandable-checkbox__menu");
const expandableButton = $('.expandable-checkbox__button');
const expandableButtonActive = 'expandable-checkbox__button-active';
const expandableList = $(".expandable-checkbox__list");

expandableToggle.on('click', function () {
  expandableButton.toggleClass(expandableButtonActive);
  expandableList.toggle();
});