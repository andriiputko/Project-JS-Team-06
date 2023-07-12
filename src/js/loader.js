var headerElement = document.querySelector('header');
var mainElement = document.querySelector('main');
var loaderElement = document.querySelector('.loader');

headerElement.style.display = 'none';
mainElement.style.display = 'none';

const showLoader = () => {
  loaderElement.style.display = 'block';

  headerElement.style.display = 'none';
  mainElement.style.display = 'none';
};

window.addEventListener('load', showLoader);

const hideLoader = () => {
  loaderElement.style.display = 'none';
  headerElement.style.display = 'block';
  mainElement.style.display = 'block';
};

setTimeout(hideLoader, 1);

export { showLoader, hideLoader };
