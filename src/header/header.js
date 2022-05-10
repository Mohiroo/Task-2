import $ from "jquery";

const headerButton = $(".header__hamburger");
const headerMenu = $(".header__menu");

headerButton.on("click", function() {
  headerMenu.toggle();
});
