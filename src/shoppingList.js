import amazonImg from './images/amazon-icon.png';
import bookImg from './images/open-book-icon.png';
import shopImg from './images/book-shop-icon.png';
import amazonImgRetina from './images/amazon-icon@2x.png';
import bookImgRetina from './images/open-book-icon@2x.png';
import shopImgRetina from './images/book-shop-icon@2x.png';

import { hideLoader, showLoader } from './js/loader.js';
import { scrollup } from './js/scrollup';
import { header } from './js/header.js';

import './js/themeDark';
import './js/fondsSlider';
import './js/sign-up-modal';

import sprite from './images/icons.svg';

const shoppingListEl = document.querySelector('.shopping-list');
const emptyListMessageEl = document.querySelector('.shopping-empty');
const headerNavListEl = document.querySelector('.header-nav-list');
const headerNavListModal = document.querySelector('.header-nav-list-modal');

const addRemoveHeaderClass = () => {
  headerNavListEl.lastElementChild.classList.add('header-tab-active');
  headerNavListEl.firstElementChild.classList.remove('header-tab-active');
};

const addRemoveModalClass = () => {
  headerNavListModal.lastElementChild.classList.add('header-active-modal');
  headerNavListModal.firstElementChild.classList.remove('header-active-modal');
  headerNavListModal.style.width = '156px';
};

showLoader();
addRemoveHeaderClass();
addRemoveModalClass();

let savedBooksList = JSON.parse(localStorage.getItem('shoppingList'));

if (savedBooksList) {
  emptyListMessageEl.classList.add('is-hidden');
}

// shoppingListEl.innerHTML = createBookCards(savedBooksList);
const createCardMarkup = booksList => {
  if (!booksList) {
    return '';
  }

  return booksList
    .map(book => {
      const description =
        book.description.trim() !== ''
          ? book.description
          : 'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.';

      return `<li class='shopping-list-item' data-id='${book._id}'>
    <img
      class='shopping-item-img'
      src='${book.book_image}'
      alt='${book.title}'
    />
    <div class='shopping-item-info'>
      <h2 class='shopping-item-title'>${book.title}</h2>
      <p class='shopping-list-name'>${book.list_name}</p>
      <p class='shopping-item-descr'>${description}</p>
      <p class='shopping-item-author'>${book.author}</p>
      <ul class='shopping-list-links'>
        <li><a href='${book.buy_links[0].url}' target='_blank'><img
              class='shopping-link-img amazon-img'
              srcset="${amazonImg} 1x, ${amazonImgRetina} 2x"
              src='${amazonImg}'
              alt='Amazon'
            /></a></li>
        <li><a href='${book.buy_links[1].url}' target='_blank'><img
              class='shopping-link-img book-img'
              srcset="${bookImg} 1x, ${bookImgRetina} 2x"
              src='${bookImg}'
              alt='Open book'
            /></a></li>
        <li><a href='${book.buy_links[4].url}' target='_blank'><img
              class='shopping-link-img shop-img'
              srcset="${shopImg} 1x, ${shopImgRetina} 2x"
              src='${shopImg}'
              alt='Shop icon'
            /></a></li>
      </ul>
    </div>
    <button class='shopping-item-btn'>
      <svg class='shopping-item-btn-icon'>
        <use href="${sprite}#icon-trash"></use>
      </svg>
    </button>
  </li>`;
    })
    .join('');
};

let bookCardMarkup = createCardMarkup(savedBooksList);

shoppingListEl.innerHTML = bookCardMarkup;

const refreshLocalStorage = id => {
  const bookStorageArray = JSON.parse(localStorage.getItem('shoppingList'));

  bookStorageArray.forEach((book, index) => {
    if (book._id === id) {
      bookStorageArray.splice(index, 1);
    }
  });

  if (bookStorageArray.length === 0) {
    localStorage.removeItem('shoppingList');
    return;
  }

  localStorage.setItem('shoppingList', JSON.stringify(bookStorageArray));

  return bookStorageArray;
};

const handleClick = event => {
  if (event.target.nodeName != 'BUTTON') {
    return;
  }

  const objectId = event.target.parentElement.dataset.id;

  savedBooksList = refreshLocalStorage(objectId);

  if (!savedBooksList) {
    emptyListMessageEl.classList.remove('is-hidden');
  }

  bookCardMarkup = createCardMarkup(savedBooksList);

  shoppingListEl.innerHTML = bookCardMarkup;
};

shoppingListEl.addEventListener('click', handleClick);

setTimeout(hideLoader, 1000);
