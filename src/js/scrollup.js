// Функция throttle
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

// Функция debounce
function debounce(func, delay) {
  let timeoutId;

  return function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(func, delay);
  };
}

// Код для прокрутки вверх
function scrollToTop() {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}

// Функция обновления состояния кнопки "прокрутить вверх"
function updateScrollButtonVisibility() {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
}

// Обработчик события скролла с применением throttle
window.addEventListener(
  'scroll',
  throttle(function () {
    updateScrollButtonVisibility();
  }, 200)
);

// Получаем ссылку на кнопку прокрутки вверх
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Обработчик события клика с применением debounce
scrollToTopButton.addEventListener(
  'click',
  debounce(function () {
    scrollToTop();
  }, 300)
);

// Инициализация состояния кнопки при загрузке страницы
updateScrollButtonVisibility();