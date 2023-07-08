"use strict"

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // Додаємо клас "darkmode" до body
  document.body.classList.add('darkmode');
  // Оновлюємо значення "darkMode" у localStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // Видаляємо клас "darkmode" з body
  document.body.classList.remove('darkmode');
  // Оновлюємо значення "darkMode" у localStorage
  localStorage.setItem('darkMode', null);
};

// Перевіряємо, чи включений темний режим
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Додаємо обробник події "click" на кнопку перемикача теми
darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});