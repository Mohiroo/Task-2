var $ = require( "jquery" );
var like_count = parseInt($(".like-button").text())

$(".like-button").on('click', function(){
  $(".like-button").toggleClass("like-button_enable")

  if ($(".like-button").hasClass("like-button_enable")) {
    $(".like-button__count").text(like_count+1)
  } else {
    $(".like-button__count").text(like_count)
  }  
})