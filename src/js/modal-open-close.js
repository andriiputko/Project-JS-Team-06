import modalAPI from './modalAPI';
import amazonImg from '../images/amazon-icon.png';
import bookImg from '../images/open-book-icon.png';
import shopImg from '../images/book-shop-icon.png';
import amazonImgRetina from '../images/amazon-icon@2x.png';
import bookImgRetina from '../images/open-book-icon@2x.png';
import shopImgRetina from '../images/book-shop-icon@2x.png';
import sprite from '../images/icons.svg';
import Notiflix from 'notiflix';


export const modalFunc = async () => {
  const bookCategoryList = document.querySelectorAll('.book-category-list');
  const modalEl = document.querySelector('[data-modal-book]');
  const bodyEl = document.querySelector('body');

  let bookID = null;
  let book = null;

  const instanceModalAPI = new modalAPI();

  const handleImageClick = event => {
    if (event.target.nodeName !== 'IMG') {
      return;
    }
    modalEl.classList.remove('is-hidden');
    bodyEl.style.overflow = 'hidden';

    bookID = event.target.dataset.id;
    refreshModal(bookID);
  };

  const handleCloseClick = event => {
    modalEl.classList.add('is-hidden');
    bodyEl.style.overflow = '';
  };

  const handleCloseEscape = event => {
    if (event.key !== 'Escape') {
      return;
    }
    modalEl.classList.add('is-hidden');
    bodyEl.style.overflow = '';
    document.removeEventListener('keydown', handleCloseEscape);
  };

  async function refreshModal(bookID) {
    try {
      book = await instanceModalAPI.fetchBook(bookID);
      console.log(book);

      const markup = generateCardElement(book);
      modalEl.innerHTML = markup;

      const buttonCloseEl = document.querySelector('[data-modal-book-close]');
      buttonCloseEl.addEventListener('click', handleCloseClick);

      document.addEventListener('keydown', handleCloseEscape);

      const addButton = document.querySelector('[data-modal-add]');
      addButton.addEventListener('click', handleAddToShoppingList);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const generateCardElement = book => {
    const description =
      book.description.trim() !== ''
        ? book.description
        : 'In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.';

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
          <p class="modal-description-book">${description}</p>
          <ul class="trade-list">
            <li class="trade-item">
              <a href='${book.buy_links[0].url}' target='_blank'>
                <img 
                  class='trade-link-img amazon-img'
                  srcset="${amazonImg} 1x, ${amazonImgRetina} 2x"
                  src="${amazonImg}"
                  alt="amazon"
                  width="62"
                  height="19"
                />
              </a>
            </li>
            <li class="trade-item">
              <a href='${book.buy_links[1].url}' target='_blank'>
                <img
                  class='trade-link-img book-img'
                  srcset="${bookImg} 1x, ${bookImgRetina} 2x"
                  src="${bookImg}"
                  alt="apple"
                  width="33"
                  height="32"
                />
              </a>
            </li>
            <li class="trade-item">
              <a href='${book.buy_links[4].url}' target='_blank'>
                <img
                  class='trade-link-img shop-img'
                  srcset="${shopImg} 1x, ${shopImgRetina} 2x"
                  src="${shopImg}"
                  alt="book" 
                  width="38" 
                  height="36" 
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn-box">
        <button class="btn-add-shopping-list" type="button" data-modal-add>ADD TO SHOPPING LIST</button>
        <div id="shopping-list"></div>
        <div id="confirmation-message" style="text-align: center; opacity: 0.5; display: none;"></div>
      </div>
    </div>`;
  };



  const handleAddToShoppingList = event => {
  const button = event.target;
  console.log(event.target);
  console.log(book);
  // debugger;

  if (button.textContent === 'ADD TO SHOPPING LIST') {
    const result = addToShoppingList(book);

    if (!result) {
      // Книга вже існує, вивести повідомлення
      Notiflix.Notify.failure('This book is already on the shopping list.');
      return;
    }

    button.textContent = 'REMOVE FROM SHOPPING LIST';
    showConfirmationMessage();
  } else {
    removeFromShoppingList(book);
    button.textContent = 'ADD TO SHOPPING LIST';
    removeConfirmationMessage();
  }
};


  // const handleAddToShoppingList = event => {
  //   const button = event.target;
  //   console.log(event.target);
  //   console.log(book);
  //   // debugger;

  //   if (button.textContent === 'ADD TO SHOPPING LIST') {
  //     const result = addToShoppingList(book);

  //     if (!result) {
  //       return;
  //     }

  //     button.textContent = 'REMOVE FROM SHOPPING LIST';
  //     showConfirmationMessage();
  //   } else {
      
  //     removeFromShoppingList(book);
  //     button.textContent = 'ADD TO SHOPPING LIST';
  //     removeConfirmationMessage();
  //   }
  // };

  function addToShoppingList(book) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    const bookObj = shoppingList.find(el => {
      return el._id === book._id;
    });

    if (bookObj) {
      console.warn('There is the same object in local storage!');
      return;
    }

    shoppingList.push(book);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    return book;
  }

  function removeFromShoppingList(book) {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

    shoppingList.forEach((el, index) => {
      if (el._id === book._id) {
        shoppingList.splice(index, 1);
        book = null;
        return;
      }
    });

    if (shoppingList.length === 0) {
      localStorage.removeItem('shoppingList');
      return;
    }

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
  }

  const showConfirmationMessage = () => {
    const message =
      "Congratulations! You have added the book to the shopping list. To delete, press the button 'Remove from the shopping list'.";

    const button = document.querySelector('[data-modal-add]');
    const parentElement = button.parentElement;

    const messageElement = document.createElement('p');
    messageElement.style.marginTop = '8px';
    messageElement.id = 'confirmation-message';
    messageElement.style.textAlign = 'center';
    messageElement.style.opacity = '0.5';
    messageElement.textContent = message;

    parentElement.appendChild(messageElement);
  };

  const removeConfirmationMessage = () => {
    const messageElement = document.getElementById('confirmation-message');
    if (messageElement) {
      messageElement.remove();
    }
  };

  bookCategoryList.forEach(element => {
    element.addEventListener('click', handleImageClick);
  });
};
