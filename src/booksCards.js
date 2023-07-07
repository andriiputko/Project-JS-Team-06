import booksAPI from './booksAPI.js';
import showBooks from './createBookCards.hbs';
const instanceBooksAPI = new booksAPI();
const booksContainer = document.querySelector('.book-category-lists');
instanceBooksAPI.fetchBooks().then(data => {
  console.log(data);
  booksContainer.insertAdjacentHTML('beforeend', showBooks(data));
});
