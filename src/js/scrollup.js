 window.addEventListener('scroll', function() {
  const button = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

function scrollToTop() {
  const currentPosition = window.pageYOffset;
  if (currentPosition > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}