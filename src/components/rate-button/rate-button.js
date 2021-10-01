var $ = require( "jquery" );

$('.rate-button__star-1').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  for (var i = 1; i <= 1; i++) {
    $(".rate-button__star-" + i).prop('checked', true);
  }
});

$('.rate-button__star-2').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  for (var i = 1; i <= 2; i++) {
    $(".rate-button__star-" + i).prop('checked', true);
  }
});

$('.rate-button__star-3').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  for (var i = 1; i <= 3; i++) {
    $(".rate-button__star-" + i).prop('checked', true);
  }
});

$('.rate-button__star-4').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  for (var i = 1; i <= 4; i++) {
    $(".rate-button__star-" + i).prop('checked', true);
  }
});

$('.rate-button__star-5').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', true);
});