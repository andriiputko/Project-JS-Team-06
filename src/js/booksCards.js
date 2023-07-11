import Notiflix from 'notiflix';
import booksAPI from './booksAPI.js';

import { modalFunc } from './modal-open-close';

const instanceBooksAPI = new booksAPI();
const booksContainer = document.querySelector('.book-category-lists');

function generateBookListHTML(bookList) {
  return bookList
    .map(
      book => `
        <li class="book-category-list-card">
          <a class="book-category-hover-effect-container">
            <img class="book-category-list-img" data-id="${book._id}" src="${book.book_image}" alt="${book.title}" loading="lazy">
            <div class="overlay">
              <p class="book-category-hover-effect">QUICK VIEW</p>
            </div>
          </a>
          <h3 class="book-category-list-category-book-name">${book.title}</h3>
          <p class="book-category-list-book-author">${book.author}</p>
        </li>
      `
    )
    .join('');
}

export async function generateBookCategoryElements(data) {
  const elements = [];

  for (const category of data) {
    const categoryWrapper = document.createElement('div');
    categoryWrapper.classList.add('book-list-container');
    categoryWrapper.innerHTML = `
      <p class="book-category">${category.list_name}</p>
      <ul class="book-category-list">
        ${category.books.length > 0 ? generateBookListHTML(category.books) : ''}
      </ul>
      <div class="button-container">
        <button class="book-category-btn" data-category="${
          category.list_name
        }" type="button">SEE MORE</button>
      </div>
    `;

    const button = categoryWrapper.querySelector('.book-category-btn');
    button.addEventListener('click', async () => {
      const bookListContainer = categoryWrapper.querySelector(
        '.book-category-list'
      );

      try {
        const bookList = await instanceBooksAPI.fetchCategoryBooks(
          category.list_name
        );

        if (bookList.length > 0) {
          const existingIds = category.books.map(book => book._id);
          const filteredArray = bookList.filter(
            book => !existingIds.includes(book._id)
          );

          if (filteredArray.length === 0) {
            button.style.display = 'none';
            Notiflix.Notify.info("That's all books in this category");
            return;
          }

          const bookListHTML = generateBookListHTML(filteredArray);
          bookListContainer.innerHTML += bookListHTML;

          button.style.display = 'none';
          Notiflix.Notify.info("That's all books in this category");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });

    elements.push(categoryWrapper);
  }

  return elements;
}

export async function showCards() {
  try {
    const data = await instanceBooksAPI.fetchBooks();
    const elements = await generateBookCategoryElements(data);

    elements.forEach(element => {
      booksContainer.appendChild(element);
    });

    modalFunc();
  } catch (error) {
    console.error('Error:', error);
  }
}
