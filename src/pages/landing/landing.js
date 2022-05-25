import '../template-page/template-page';
import '../../cards/find-room/find-room';
import '../../header/header';
import '../../footer/footer';
import './landing.pug';
import './landing.scss';
import $ from "jquery";

window.sessionStorage.clear()

const buttonNext = $('.button-big')

buttonNext.on("click", function () {
  if ((+getItem('adult')) + (+getItem('children')) + (+getItem('infants')) !== 0 && (+getItem('countDays')) !== 0) {
    window.location.href = 'search-room.html';
  }
});

function getItem(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch (e) {
    console.warn(e);
  }
};