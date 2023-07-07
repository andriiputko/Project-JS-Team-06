import createBookCards from './hbs/createBookCards.hbs';

const shoppingListEl = document.querySelector('.shopping-list');

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

const savedBooksList = JSON.parse(localStorage.getItem('shopping-list'));
shoppingListEl.innerHTML = createBookCards(savedBooksList);
// console.log(savedSettings);
