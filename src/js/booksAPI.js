export default class booksAPI {
  #CATEGORY_URL = 'https://books-backend.p.goit.global/books/category-list';
  #TOP_BOOKS_URL = 'https://books-backend.p.goit.global/books/top-books';

  async fetchBooks() {
    try {
      const response = await fetch(this.#TOP_BOOKS_URL);
      const books = await response.json();
      return books;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchCategories() {
    try {
      const response = await fetch(this.#CATEGORY_URL);
      const categories = await response.json();
      return categories;
    } catch (error) {
      throw new Error(error);
    }
  }

  async fetchCategoryBooks(category) {
    try {
      const url = `https://books-backend.p.goit.global/books/category?category=${category}`;
      const response = await fetch(url);
      const books = await response.json();
      return books;
    } catch (error) {
      throw new Error(error);
    }
  }
}
