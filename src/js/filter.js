import booksAPI from './booksAPI.js'; 
CATEGORY_URL = 'https://books-backend.p.goit.global/books/category-list';
const categoryInstance = new booksAPI();
const listCategoryBooks = document.querySelector('.filter-list');
const elements = [];

  //    -------- функція працює - запит виконується -------
//export async function createListWithLinks() {
 
//    try {
//        const response = await fetch(this.CATEGORY_URL);
//        const data = await response.json();
//        console.log(data);
                    
//  }
//  catch (error) {
 //   console.error('Помилка під час запиту fetch:', error);
//  }
//}

//createListWithLinks();

//   -----------------------------------------------------
function createBooksCategory(categories) {

    console.log(categories);

    for (const category of categories) {
         
    const markup = categories.map(category => `
    <li class="filter-list-item">
    <a href="" class="category-filter-link">${category.list_name}</a></li>
    `).join("");
        
    console.log(markup);
    
   listCategoryBooks.innerHTML = markup;
      

    }
    return elements;
    }
   

async function showList() {
  try {
    const categories = await categoryInstance.fetchCategories();
    const elements = await createBooksCategory(categories);
     
    elements.forEach(element => {
      listCategoryBooks.after(element);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

showList();





