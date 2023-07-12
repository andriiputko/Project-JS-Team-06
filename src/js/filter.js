import booksAPI from './booksAPI.js';
import { modalFunc } from './modal-open-close';
import { generateBookCategoryElements, showCards } from './booksCards.js';

const categoryInstance = new booksAPI();
const instanceTopBooksAPI = new booksAPI();
const listCategoryBooks = document.querySelector('.filter-list');
const booksContainer = document.querySelector('.book-category-lists');
const filterLink = document.querySelector('.filter-link');

async function createBooksCategory(categories) {
  categories.sort((a, b) => {

    const nameA = a.list_name.toUpperCase(); // Конвертуємо великі і маленькі літери для правильного порівняння
    const nameB = b.list_name.toUpperCase();

    if (nameA < nameB) {
      return -1; // a перед b
    }
    if (nameA > nameB) {
      return 1; // a після b
    }
    return 0; // a рівне b
  });


  const markup = categories
    .map(
      category => `
      <li class="filter-list-item">
        <a href="#" class="category-filter-link">${category.list_name}</a>
      </li>
    `
    )
    .join('');

  listCategoryBooks.innerHTML = markup;
  updateCategoryClickEventListeners();
}

async function showList() {
  try {
    const categories = await categoryInstance.fetchCategories();
    await createBooksCategory(categories);
  } catch (error) {
    console.error('Error:', error);
  }
}

async function displayBooksByCategory(category) {
  try {
    const url = `https://books-backend.p.goit.global/books/category?category=${category}`;
    const response = await fetch(url);
    const books = await response.json();

    const categoryWrapper = document.createElement('div');
    categoryWrapper.innerHTML = `
      <ul class="book-category-list">
        ${books
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
          .join('')}
      </ul>
    `;

    booksContainer.innerHTML = '';
    booksContainer.appendChild(categoryWrapper);

    modalFunc();
  } catch (error) {
    console.error('Error:', error);
  }
}

function handleCategoryClick(event) {
  event.preventDefault();

  const selectedCategory = event.target.textContent;
  const mainCategoryText = document.querySelector('.main-category-text');

  mainCategoryText.textContent = selectedCategory;
  displayBooksByCategory(selectedCategory);
  filterLink.classList.remove('active-filter');
}

function updateCategoryClickEventListeners() {
  const categoryLinks = document.querySelectorAll('.category-filter-link');
  categoryLinks.forEach(link => {
    link.addEventListener('click', handleCategoryClick);
  });
}

filterLink.addEventListener('click', () => {
  filterLink.classList.add('active-filter');
});

async function initializePage() {
  try {
    await Promise.all([showList(), showCards()]);
  } catch (error) {
    console.error('Error:', error);
  }
}

initializePage();

