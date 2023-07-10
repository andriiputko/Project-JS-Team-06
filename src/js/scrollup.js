function scrollToTop() {
  const currentPosition = window.pageYOffset;
  if (currentPosition > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

window.addEventListener('scroll', function() {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

const scrollToTopButton = document.getElementById('scrollToTopButton');
scrollToTopButton.addEventListener('click', scrollToTop);