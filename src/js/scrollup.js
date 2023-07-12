function throttle(func, delay) {
  let timeoutId;
  let isThrottled = false;

  return function () {
    if (!isThrottled) {
      func.apply(this, arguments);
      isThrottled = true;

      timeoutId = setTimeout(function () {
        isThrottled = false;
      }, delay);
    }
  };
}

function debounce(func, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(func, delay);
  };
}

function scrollToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

function updateScrollButtonVisibility() {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.visibility = 'visible';
    scrollToTopButton.style.opacity = '1';
  } else {
    scrollToTopButton.style.visibility = 'hidden';
    scrollToTopButton.style.opacity = '0';
  }
}

window.addEventListener(
  'scroll',
  throttle(function () {
    updateScrollButtonVisibility();

    window.addEventListener(
      'scroll',
      throttle(function () {
        const scrollToTopButton = document.getElementById('scrollToTopButton');
        if (window.pageYOffset > 100) {
          scrollToTopButton.style.visibility = 'visible';
          scrollToTopButton.style.opacity = '1';
        } else {
          scrollToTopButton.style.visibility = 'hidden';
          scrollToTopButton.style.opacity = '0';
        }
      }, 200)
    );

    const scrollToTopButton = document.getElementById('scrollToTopButton');

    scrollToTopButton.addEventListener(
      'click',
      debounce(function () {
        scrollToTop();
      }, 300)
    );

    updateScrollButtonVisibility();
  })
);
