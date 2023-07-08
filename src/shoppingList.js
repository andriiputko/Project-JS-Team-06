import createBookCards from './hbs/createBookCards.hbs';

const shoppingListEl = document.querySelector('.shopping-list');
const emptyListMessageEl = document.querySelector('.shopping-emty');

const fetchBookData = () => {
  return fetch(
    'https://books-backend.p.goit.global/books/category?category=Graphic Books and Manga'
  ).then(response => {
    return response.json();
  });
};

const bookObj = fetchBookData()
  .then(response => {
    const bookStorageArray = [];
    bookStorageArray.push(response[0]);
    bookStorageArray.push(response[3]);
    bookStorageArray.push(response[5]);
    console.log(bookStorageArray);
    localStorage.setItem('shopping-list', JSON.stringify(bookStorageArray));
  })
  .catch(console.warn);

let savedBooksList = JSON.parse(localStorage.getItem('shopping-list'));

if (savedBooksList.length != 0) {
  emptyListMessageEl.classList.add('is-hidden');
}

shoppingListEl.innerHTML = createBookCards(savedBooksList);

const refreshLocalStorage = id => {
  const bookStorageArray = JSON.parse(localStorage.getItem('shopping-list'));

  bookStorageArray.forEach((book, index) => {
    if (book._id === id) {
      bookStorageArray.splice(index, 1);
    }
  });

  if (bookStorageArray.length === 0) {
    localStorage.removeItem('shopping-list');
    return;
  }

  localStorage.setItem('shopping-list', JSON.stringify(bookStorageArray));

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

  shoppingListEl.innerHTML = createBookCards(savedBooksList);
};

shoppingListEl.addEventListener('click', handleClick);
