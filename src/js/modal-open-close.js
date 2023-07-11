import modalAPI from './modalAPI';

import amazonImg from '../images/amazon-icon.png';
import bookImg from '../images/open-book-icon.png';
import shopImg from '../images/book-shop-icon.png';
import amazonImgRetina from '../images/amazon-icon@2x.png';
import bookImgRetina from '../images/open-book-icon@2x.png';
import shopImgRetina from '../images/book-shop-icon@2x.png';

import sprite from '../images/icons.svg';

export const modalFunc = async () => {
  const bookCategoryList = document.querySelectorAll('.book-category-list');
  const modalEl = document.querySelector('[data-modal-book]');

  const instanceModalAPI = new modalAPI();

  const handleImageClick = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    modalEl.classList.remove('is-hidden');

    // debugger;

    const bookID = event.target.dataset.id;
    refreshModal(bookID);
  };

  const handleCloseClick = event => {
    modalEl.classList.add('is-hidden');
  };

  async function refreshModal(bookID) {
    try {
      const book = await instanceModalAPI.fetchBook(bookID);
      console.log(book);

      const markup = generateCardElement(book);
      modalEl.innerHTML = markup;

      const buttonCloseEl = document.querySelector('[data-modal-book-close]');
      buttonCloseEl.addEventListener('click', handleCloseClick);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const generateCardElement = book => {
    return `<div class="modal-book">
        <button class="modal-book-close" type="button" data-modal-book-close>
          <svg class="modal-book-close-icon" width="24" height="24">
            <use href="${sprite}#icon-close"></use>
          </svg>
        </button>
        <div class="modal-wrapper">
        <img class="modal-book-img" src="${book.book_image}" alt="${book.title}" width="287" height="408" />
        <div class="modal-wrapper-content">
        <h2 class="modal-book-name">${book.title}</h2>
        <h3 class="modal-book-author">${book.author}</h3>
        <p class="modal-description-book">${book.description}</p>
        <ul class="trade-list">
          <li class="trade-item">
            <a href="#">
              <img
                srcset="${amazonImg} 1x, ${amazonImgRetina} 2x"
                src="${amazonImg}"
                alt="amazon"
                width="62"
                height="19"
              />
              <!-- <svg class="trade-icon" width="62" height="19">
                <use href="./images/icons.svg#"></use>
              </svg> -->
            </a>
          </li>
          <li class="trade-item">
            <a href="#">
              <!-- <svg class="trade-icon" width="33" height="32"></svg> -->
              <img
                srcset="${bookImg} 1x, ${bookImgRetina} 2x"
                src="${bookImg}"
                alt="apple"
                width="33"
                height="32"
              />
            </a>
          </li>
          <li class="trade-item">
            <a href="#">
              <img
                srcset="${shopImg} 1x, ${shopImgRetina} 2x"
                src="${shopImg}"
                alt="book" 
                width="38" 
                height="36" 
              />
              <!-- <svg class="trade-icon" width="38" height="36"></svg> -->
            </a>
          </li>
        </ul>
        </div>
        </div>
        <div class="btn-box">
          <button class="btn-add-shopping-list" type="button" data-modal-add>
            ADD TO SHOPPING LIST
          </button>
        </div>
      </div>`;
  };

  bookCategoryList.forEach(element => {
    element.addEventListener('click', handleImageClick);
  });
};
