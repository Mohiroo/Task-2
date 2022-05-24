import './pagination.scss';
import $ from "jquery";

const paginationButton = $('.pagination__button');

const paginationPrev = paginationButton.eq(0);
const paginationNext = paginationButton.eq(8);

const paginationFirst = paginationButton.eq(1);
const paginationSecond = paginationButton.eq(2);
const paginationThird = paginationButton.eq(3);
const paginationFourth = paginationButton.eq(4);
const paginationFifth = paginationButton.eq(5);
const paginationSixth = paginationButton.eq(6);
const paginationSeventh = paginationButton.eq(7);

const paginationButtonDisable = 'pagination__button-disable';
const paginationButtonActive = 'pagination__button-active';

let currentPage = 1;
const maxPage = 15;

const paginationSubtext = $('.pagination-subtext');
const range = 12;


createPagination();

paginationPrev[0].addEventListener('click', () => move('left'));
paginationNext[0].addEventListener('click', () => move('right'));
paginationFirst[0].addEventListener('click', () => moveTo(+paginationFirst.text()));
paginationSecond[0].addEventListener('click', () => moveTo(+paginationSecond.text()));
paginationThird[0].addEventListener('click', () => moveTo(+paginationThird.text()));
paginationFourth[0].addEventListener('click', () => moveTo(+paginationFourth.text()));
paginationFifth[0].addEventListener('click', () => moveTo(+paginationFifth.text()));
paginationSixth[0].addEventListener('click', () => moveTo(+paginationSixth.text()));
paginationSeventh[0].addEventListener('click', () => moveTo(+paginationSeventh.text()));

// Передвижение по кнопкам
function move(direction) {
  currentPage = direction === 'right' ? currentPage + 1 : currentPage - 1;
  createPagination();
};

// Передвижение по цифрам
function moveTo(number) {
  if (isNaN(number)) return;

  currentPage = number;
  createPagination();
};

// Перерисовка pagination
function createPagination() {
  paginationButton.removeClass(paginationButtonDisable).removeClass(paginationButtonActive);

  switch (currentPage) {
    case 1:
      paginationPrev.addClass(paginationButtonDisable);
      paginationFirst.text(currentPage).addClass(paginationButtonActive);
      paginationSecond.text(currentPage + 1);
      paginationThird.text(currentPage + 2);
      paginationFourth.addClass(paginationButtonDisable);
      paginationFifth.addClass(paginationButtonDisable);
      paginationSixth.text('...');
      paginationSeventh.text(maxPage);
      break;
    case 2:
      paginationSecond.addClass(paginationButtonActive);
      paginationFourth.addClass(paginationButtonDisable);
      paginationFifth.addClass(paginationButtonDisable);
      paginationSixth.text('...');
      break;
    case 3:
      paginationSecond.text(currentPage - 1);
      paginationThird.text(currentPage).addClass(paginationButtonActive);
      paginationFourth.text(currentPage + 1);
      paginationFifth.addClass(paginationButtonDisable);
      paginationSixth.text('...');
      break;
    case 4:
      paginationSecond.text(currentPage - 2);
      paginationThird.text(currentPage - 1);
      paginationFourth.text(currentPage).addClass(paginationButtonActive);
      paginationFifth.text(currentPage + 1);
      paginationSixth.text('...');
      break;
    case maxPage - 3:
      paginationThird.text(currentPage - 1);
      paginationFourth.text(currentPage).addClass(paginationButtonActive);
      paginationFifth.text(currentPage + 1);
      paginationSixth.text(currentPage + 2);
      break;
    case maxPage - 2:
      paginationThird.addClass(paginationButtonDisable);
      paginationFourth.text(currentPage - 1);
      paginationFifth.text(currentPage).addClass(paginationButtonActive);
      break;
    case maxPage - 1:
      paginationThird.addClass(paginationButtonDisable);
      paginationFourth.addClass(paginationButtonDisable);
      paginationSixth.addClass(paginationButtonActive);
      break;
    case maxPage:
      paginationSecond.text('...');
      paginationThird.addClass(paginationButtonDisable);
      paginationFourth.addClass(paginationButtonDisable);
      paginationFifth.text(maxPage - 2);
      paginationSixth.text(maxPage - 1);
      paginationSeventh.addClass(paginationButtonActive);
      paginationNext.addClass(paginationButtonDisable);
      break;
    default:
      paginationSecond.text('...');
      paginationThird.text(currentPage - 1);
      paginationFourth.text(currentPage).addClass(paginationButtonActive);
      paginationFifth.text(currentPage + 1);
      paginationSixth.text('...');
  };

  paginationSubtext.text(`${range * (currentPage - 1) + 1} – ${range * currentPage} из 100+ вариантов аренды`)
};