import "../../components/filter-date-dropdown/filter-date-dropdown";
import "../../components/rich-checkbox-buttons/rich-checkbox-buttons";
import "../../components/checkbox-buttons/checkbox-buttons";
import "../../components/dropdown-guests/dropdown-guests";
import "../../components/dropdown-rooms/dropdown-rooms";
import "../../components/range-slider/range-slider.js";
import "../../components/expandable-checkbox-list/expandable-checkbox-list";
import "../../components/pagination/pagination";
import "../../cards/calendar/calendar";
import '../../cards/room-card/room-card';
import "../../footer/footer";
import "../../header/header";
import '../template-page/template-page';
import './search-room.pug';
import './search-room.scss';
import $ from "jquery";

const filters = $(".search-room__filters");
const filtersButton = $(".filters__button");

const translateFilters = () => $(window).width() < 1190 ? -294 : 0;
let translateValue = -294;

window.addEventListener('load', function () {
  filters.css('transform', `translateX(${translateFilters()}px)`);
});

window.addEventListener('resize', function () {
  filters.css('transform', `translateX(${translateFilters()}px)`);
});

filtersButton.on("click", function () {
  filters.css('transform', `translateX(${translateValue = translateValue === 0 ? -294 : 0}px)`);
});