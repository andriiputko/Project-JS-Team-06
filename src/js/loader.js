document.addEventListener('DOMContentLoaded', function() {
  const loader = document.querySelector('.loader-offline');
  const content = document.querySelector('.content');

  function showLoader() {
    content.style.display = 'none';
    loader.style.display = 'block';
  }

  function showContent() {
    content.style.display = 'block';
    loader.style.display = 'none';
  }

  showLoader();

  setTimeout(function() {
    showContent();
  }, 5000); 
});