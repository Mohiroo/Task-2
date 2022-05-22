import $ from 'jquery';

const likeButton = $('.like-button');
const likeCount = $('.like-button__count');
const likeHeart = $('.like-button__like');
const likeButtonActive = 'like-button_active';

likeButton.on('click', function () {
  let currentLikeCount = +($(this).find(likeCount).text())

  $(this).toggleClass(likeButtonActive);
  $(this).find(likeCount).text($(this).hasClass(likeButtonActive) ? currentLikeCount + 1 : currentLikeCount - 1);

  let likeHeartText = $(this).find(likeHeart).text()
  $(this).find(likeHeart).text(likeHeartText === 'favorite' ? 'favorite_border' : 'favorite')
});