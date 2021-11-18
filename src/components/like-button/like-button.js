var $ = require( "jquery" );
var like_count = parseInt($(".like-button").text())

$(".like-button").on('click', function(){
  if ($(".like-button").hasClass("like-button_enable")) {
    like_count -= 1;
    $(".like-button__count").text(like_count)
  } else {
    like_count += 1;
    $(".like-button__count").text(like_count)
  }
  
  $(".like-button").toggleClass("like-button_enable")
})