var $ = require( "jquery" );

$('.rate-button__star-1').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  $(".rate-button__star-1").prop('checked', true);
});

$('.rate-button__star-2').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  $(".rate-button__star-1").prop('checked', true);
  $(".rate-button__star-2").prop('checked', true);
});

$('.rate-button__star-3').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  $(".rate-button__star-1").prop('checked', true);
  $(".rate-button__star-2").prop('checked', true);
  $(".rate-button__star-3").prop('checked', true);
});

$('.rate-button__star-4').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  $(".rate-button__star-1").prop('checked', true);
  $(".rate-button__star-2").prop('checked', true);
  $(".rate-button__star-3").prop('checked', true);
  $(".rate-button__star-4").prop('checked', true);
});

$('.rate-button__star-5').on('click', function(){
  $('.rate-button input:checkbox').prop('checked', false);
  $(".rate-button__star-1").prop('checked', true);
  $(".rate-button__star-2").prop('checked', true);
  $(".rate-button__star-3").prop('checked', true);
  $(".rate-button__star-4").prop('checked', true);
  $(".rate-button__star-5").prop('checked', true);
});