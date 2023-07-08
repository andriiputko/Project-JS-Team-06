import booksAPI from './booksAPI.js';
const instanceBooksAPI = new booksAPI();
const booksContainer = document.querySelector('.book-category-lists');
export function generateBookCategoryElements(data) {
  var elements = [];

  data.forEach(function (category) {
    var categoryWrapper = document.createElement('div');

    var categoryTitle = document.createElement('p');
    categoryTitle.className = 'book-category';
    categoryTitle.textContent = category.list_name;
    categoryWrapper.appendChild(categoryTitle);

    var categoryList = document.createElement('ul');
    categoryList.className = 'book-category-list';

    category.books.forEach(function (book) {
      var listItem = document.createElement('li');
      listItem.className = 'book-category-list-card';

      var link = document.createElement('a');
      link.className = 'book-category-hover-effect-container';
      link.href = '#';

      var image = document.createElement('img');
      image.className = 'book-category-list-img';
      image.setAttribute('data-id', book._id);
      image.src = book.book_image;
      image.alt = book.title;
      image.setAttribute('loading', 'lazy'); // Add lazy loading attribute

      var overlay = document.createElement('div');
      overlay.className = 'overlay';

      var overlayText = document.createElement('p');
      overlayText.className = 'book-category-hover-effect';
      overlayText.textContent = 'QUICK VIEW';

      overlay.appendChild(overlayText);
      link.appendChild(image);
      link.appendChild(overlay);
      listItem.appendChild(link);

      var bookTitle = document.createElement('h3');
      bookTitle.className = 'book-category-list-category-book-name';
      bookTitle.textContent = book.title;

      var bookAuthor = document.createElement('p');
      bookAuthor.className = 'book-category-list-book-author';
      bookAuthor.textContent = book.author;

      listItem.appendChild(bookTitle);
      listItem.appendChild(bookAuthor);

      categoryList.appendChild(listItem);
    });

    categoryWrapper.appendChild(categoryList);

    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    var button = document.createElement('button');
    button.className = 'book-category-btn';
    button.setAttribute('data-category', category.list_name);
    button.type = 'button';
    button.textContent = 'SEE MORE';

    buttonContainer.appendChild(button);

    categoryWrapper.appendChild(buttonContainer);

    elements.push(categoryWrapper);
  });

  return elements;
}

instanceBooksAPI.fetchBooks().then(data => {
  const elements = generateBookCategoryElements(data);

  elements.forEach(element => {
    booksContainer.appendChild(element);
  });
});
