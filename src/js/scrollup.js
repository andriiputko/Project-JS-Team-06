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
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
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
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
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
  
  }));