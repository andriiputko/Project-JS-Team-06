var headerElement = document.querySelector('header');
var mainElement = document.querySelector('main');
var loaderElement = document.querySelector('.loader');

headerElement.style.display = 'none';
mainElement.style.display = 'none';

window.addEventListener('load', function() {
  loaderElement.style.display = 'block';

  headerElement.style.display = 'none';
  mainElement.style.display = 'none';
});

setTimeout(function() {
  loaderElement.style.display = 'none';
  headerElement.style.display = 'block';
  mainElement.style.display = 'block';
}, 3000);