export default class modalAPI {
  #BASE_URL = 'https://books-backend.p.goit.global/books/';

  async fetchBook(bookID) {
    try {
      const response = await fetch(this.#BASE_URL + bookID);
      const book = await response.json();
      return book;
    } catch (error) {
      throw new Error(error);
    }
  }
}
