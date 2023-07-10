export const modalFunc = async () => {
    const bookCategoryList = document.querySelector('.book-category-list');
    const modalEl = document.querySelector('[data-modal-book]');
    const buttonCloseEl = document.querySelector('[data-modal-book-close]');

  const handleImageClick = event => {
      console.log(event.target.dataset.id);
      if (event.target.nodeName !== 'IMG') {
          return;  
      };
      modalEl.classList.remove('is-hidden'); 
    };
    const handleCloseClick = event => {
        modalEl.classList.add('is-hidden');
    };

    buttonCloseEl.addEventListener('click', handleCloseClick);
    bookCategoryList.addEventListener('click', handleImageClick);
    
};
