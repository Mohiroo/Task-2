import $ from "jquery";
import "../../header/header";
import "../../cards/calendar/calendar";
import "../../cards/room-card/room-card";
import "../../components/dropdown-guests/dropdown-guests";
import "../../components/range-slider/range-slider.js";
import "../../components/dropdown-rooms/dropdown-rooms";
import "../../components/expandable-checkbox-list/expandable-checkbox-list";
import "../../components/pagination/pagination";

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
})